"use client";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useCategories } from "@/lib/contexts/CategoriesContext";
import Link from "next/link";

export function CustomerFooter() {  
  const { theme } = useTheme();
  const { categories, loading, error } = useCategories();
  const isDark = theme === "dark";

  // Debug logging
  console.log('Footer - Categories:', categories);
  console.log('Footer - Loading:', loading);
  console.log('Footer - Error:', error);

  return (
    <footer
      className={`${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="px-6 sm:px-10 lg:px-18 xl:px-24 2xl:px-36 py-16">
        <div
          className={`max-w-[1440px] mx-auto border-t ${
            isDark ? "border-gray-700" : "border-gray-200"
          } pt-10`}
        >
          {/* Top content: Contact, Categories, and About Us with equal spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Contact Us */}
            <div className="lg:col-span-3">
              <h4 className="text-lg  tracking-wide mb-6 header-font font-normal">
                Contact Us
              </h4>
              <div className="space-y-2 text-sm font-light header-font leading-7">
                <p>
                  Address: 208-4A, Quilapal, Kuilapalayam, Arya Road.
                  <br /> Villupuram, Tamil Nadu, 605101, India
                </p>
                <p>
                  Email :{" "}
                  <a
                    href="mailto:hello@loamandroot.com"
                    className="underline underline-offset-4"
                  >
                    loamandroot.com
                  </a>
                </p>
                <p>
                  Mobile number :{" "}
                  <a
                    href="tel:+91949604666"
                    className="underline underline-offset-4"
                  >
                    +91 9494604666
                  </a>
                </p>
              </div>
            </div>

            {/* Categories */}
            <div className="lg:col-span-2">
              <h4 className="text-lg tracking-wide mb-6 text-center header-font font-normal">
                Categories
              </h4>
              <ul className="space-y-2 text-center text-sm font-light header-font leading-7">
                <li>
                  <Link href="/products" className="hover:opacity-80">
                    All Products
                  </Link>
                </li>
                {loading ? (
                  <li className="text-gray-500">Loading categories...</li>
                ) : error ? (
                  <li className="text-red-500">Error: {error}</li>
                ) : categories.length === 0 ? (
                  <li className="text-gray-500">No categories found</li>
                ) : (
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        href={`/products?category=${category.slug}`}
                        className="hover:opacity-80"
                      >
                        {category.category_name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          
            {/* About Us */}
            <div className="lg:col-span-7">
              <h4 className=" font-normal tracking-wide mb-6 header-font text-lg">
                About Us
              </h4>
              <div className="space-y-2">
                <p className="text-md header-font  opacity-90 font-light">
                  At Loam & Root, we craft collectible furniture, one-of-a-kind
                  sculptures, decorative lighting, and unique decor pieces that
                  celebrate the raw, untouched soul of materials. Each creation
                  is born from a deep respect for stone, wood, metal, and earth
                  — where natural forms, textures, and colors are honored, not
                  altered.
                </p>
                <p className="text-md header-font  opacity-90 font-light">
                  Our philosophy is simple: reveal the beauty already present.
                  We shape with intention, letting the material lead, enhancing
                  its essence without compromising its integrity.
                </p>
                <p className="text-md header-font  opacity-90 font-light">
                  Every Loam & Root piece is a story — sculptural, functional,
                  and timeless. We also welcome custom commissions, tailoring
                  our artistry to reflect your personal vision while staying
                  rooted in our design ethos.
                </p>
                <p className="text-md header-font  opacity-90 font-light">
                  Let the raw speak. Let the roots show.
                </p>
              </div>
            </div>
          </div>
          
          {/* Social icons row above the legal strip (centered to match latest change) */}
          <div className="mt-10 flex justify-center gap-4">
            <a aria-label="Facebook" href="#" className="hover:opacity-80">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a aria-label="Instagram" href="#" className="hover:opacity-80">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          
          {/* Legal strip at the very bottom (centered) */}
          <div
            className={`border-t ${
              isDark ? "border-gray-700" : "border-gray-200"
            } mt-10 pt-6`}
          >
            <div className="text-[12px] opacity-90 text-center">
              <span>© 2025, Loam&Root</span>
              <span className="px-2">·</span>
              <span>Powered by Loam&Root</span>
              <span className="px-2">·</span>
              <a href="#" className="hover:opacity-80">
                Refund policy
              </a>
              <span className="px-2">·</span>
              <a href="#" className="hover:opacity-80">
                Privacy policy
              </a>
              <span className="px-2">·</span>
              <a href="#" className="hover:opacity-80">
                Terms of service
              </a>
              <span className="px-2">·</span>
              <a href="#" className="hover:opacity-80">
                Shipping policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}