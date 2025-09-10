"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface SubCategory {
  id: number;
  name: string;
  slug: string;
  is_active: boolean;
  sort_order: number;
}

interface Category {
  id: number;
  category_name: string;
  slug: string;
  category_image: string;
  is_active: boolean;
  sort_order: number;
  sub_categories: SubCategory[];
  sub_categories_count: number;
  products_count: number;
}

interface CategoriesResponse {
  success: boolean;
  data: Category[];
  message: string;
}

interface CategoriesContextType {
  categories: Category[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};

export const CategoriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching categories from API...');
      
      // Add some headers to ensure proper request
      const response = await fetch('https://new.shop.loamandroot.com/api/categories', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        cache: 'no-cache',
      });
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Check if response has content
      const contentLength = response.headers.get('content-length');
      const contentType = response.headers.get('content-type');
      
      console.log('Content-Length:', contentLength);
      console.log('Content-Type:', contentType);
      
      // Parse JSON directly
      let data: CategoriesResponse;
      try {
        data = await response.json();
        console.log('Successfully parsed JSON:', data);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        // Try to get the raw text to see what we're getting
        const rawText = await response.text();
        console.log('Raw response text:', rawText);
        throw new Error('Invalid JSON response received');
      }
      
      console.log('Parsed data:', data);
      
      if (data && data.success && data.data) {
        // Filter only active categories
        const activeCategories = data.data.filter(category => category.is_active);
        console.log('Active categories:', activeCategories);
        setCategories(activeCategories);
      } else {
        console.log('Data structure issue:', { success: data?.success, hasData: !!data?.data, data });
        throw new Error(data?.message || 'Failed to fetch categories - success flag is false or no data');
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching categories');
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('CategoriesProvider mounted, starting fetch...');
    fetchCategories();
  }, []);

  const refetch = () => {
    fetchCategories();
  };

  const value: CategoriesContextType = {
    categories,
    loading,
    error,
    refetch,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};