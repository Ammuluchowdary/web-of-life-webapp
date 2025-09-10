'use client';

import React, { useState, memo } from 'react';
import Navbar from "../components/navbar";
import { CustomerFooter } from "../components/footer";
import { useTheme } from "next-themes";

// Reusable floating-label input
type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDark: boolean;
};

const InputField = memo(function InputField({ id, label, type = 'text', name, value, onChange, isDark }: InputFieldProps) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full px-4 py-3 bg-transparent rounded-none border transition-all duration-150 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-offset-0 ${
          isDark
            ? 'text-white border-white/40 focus:ring-white'
            : 'text-black border-black/40 focus:ring-black'
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-150 pointer-events-none ${
          isDark ? 'text-white/70 peer-focus:text-white' : 'text-black/70 peer-focus:text-black'
        } peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs`}
      >
        {label}
      </label>
    </div>
  );
});

type TextareaFieldProps = {
  id: string;
  label: string;
  name: string;
  value: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDark: boolean;
};

const TextareaField = memo(function TextareaField({ id, label, name, value, rows = 4, onChange, isDark }: TextareaFieldProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder=" "
        className={`peer w-full px-4 py-3 bg-transparent rounded-none border resize-none transition-all duration-150 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-offset-0 ${
          isDark ? 'text-white border-white/40 focus:ring-white' : 'text-black border-black/40 focus:ring-black'
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-4 transition-all duration-150 pointer-events-none ${
          isDark ? 'text-white/70 peer-focus:text-white' : 'text-black/70 peer-focus:text-black'
        } peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs`}
      >
        {label}
      </label>
    </div>
  );
});

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare the payload for the API
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.comment,
        countryCode: "91",
        leadStage: "lead",
        leadSourceURL: window.location.origin
      };

      const response = await fetch('https://dev.crm.loamandroot.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          comment: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          
          {/* Contact Heading */}
          <div className="text-center-left mb-10">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-light leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
              Contact
            </h1>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                isDark={isDark}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                isDark={isDark}
              />
            </div>

            {/* Phone Number */}  
            <InputField
              id="phone"
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e)}
              isDark={isDark}
            />

            {/* Comment */}
            <TextareaField
              id="comment"
              label="Comment"
              name="comment"
              value={formData.comment}
              onChange={(e) => handleChange(e)}
              rows={4}
              isDark={isDark}
            />

            {/* Send Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-2 font-medium transition-colors focus:outline-none focus:ring-2 rounded-none border cursor-pointer ${
                  isDark
                    ? 'border-white text-white hover:bg-white hover:text-black focus:ring-white'
                    : 'border-black text-black hover:bg-black hover:text-white focus:ring-black'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className={`p-4 border-l-4 ${isDark ? 'border-green-400 bg-green-900/20' : 'border-green-600 bg-green-50'}`}>
                <p className={`${isDark ? 'text-green-300' : 'text-green-800'}`}>
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={`p-4 border-l-4 ${isDark ? 'border-red-400 bg-red-900/20' : 'border-red-600 bg-red-50'}`}>
                <p className={`${isDark ? 'text-red-300' : 'text-red-800'}`}>
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </main>
      
      <CustomerFooter />
    </div>
  );
}