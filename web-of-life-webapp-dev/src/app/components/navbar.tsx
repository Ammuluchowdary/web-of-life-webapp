"use client";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../assets/loamRoot.png";
import LogoBlack from "../../assets/logo-black.png";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Nav links
  const navLinks = [
    { href: "/about", label: "ABOUT" },
    { href: "/showcase", label: "SHOW CASE" },
    { href: "#", label: "SHOP" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div
      className={
        isHome
          ? "z-50 w-full top-0 left-0 " +
            "md:absolute md:bg-white/60 dark:md:bg-black/60 md:backdrop-blur-5xl md:top-0 md:left-0 " +
            "bg-white dark:bg-black"
          : "bg-white dark:bg-black z-50"
      }
    >
      <div className="py-2 px-2 w-full relative z-50">
        <nav className="flex items-center justify-between relative h-12 px-2 md:px-4">
          {/* Logo */}
          <div className="z-10 flex items-center">
            <Link href="/">
              <span>
                {!mounted ? (
                  <div className="w-20 h-10 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                ) : (
                  <Image 
                    src={theme === 'dark' ? LogoWhite : LogoBlack} 
                    alt="Loam & Root Logo" 
                    className="w-20 h-10 transition-opacity duration-300" 
                  />
                )}
              </span>
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden z-20">
            <button
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="focus:outline-none flex items-center justify-center w-10 h-10 relative"
            >
              {/* Animated Hamburger/X Icon */}
              <span className="block w-7 h-7 relative">
                {/* Top bar */}
                <span
                  className={`absolute left-0 w-7 h-0.5 bg-black dark:bg-white rounded transition-all duration-300 ease-in-out
                    ${menuOpen ? 'rotate-45 top-3.5' : 'top-2'}
                  `}
                />
                {/* Middle bar */}
                <span
                  className={`absolute left-0 w-7 h-0.5 bg-black dark:bg-white rounded transition-all duration-300 ease-in-out
                    ${menuOpen ? 'opacity-0 top-3.5' : 'top-3.5'}
                  `}
                />
                {/* Bottom bar */}
                <span
                  className={`absolute left-0 w-7 h-0.5 bg-black dark:bg-white rounded transition-all duration-300 ease-in-out
                    ${menuOpen ? '-rotate-45 top-3.5' : 'top-5'}
                  `}
                />
              </span>
            </button>
          </div>
          {/* Nav links (centered, desktop only) */}
          <div className="hidden md:flex font-serif absolute left-1/2 transform -translate-x-1/2 space-x-4 md:space-x-12">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span className="text-black dark:text-white text-xl relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-black dark:after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition after:duration-300 cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Theme Toggle (right side, desktop only) */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>
        </nav>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className={` absolute top-full left-0 w-full flex flex-col items-center z-50 py-1 ${isHome ? "bg-white/90 dark:bg-black/60" : "bg-white/95 dark:bg-black/95"}`}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                <span className="block text-black dark:text-white text-xl py-1 font-serif px-4 text-center w-full cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition">
                  {link.label}
                </span>
              </Link>
            ))}
            {/* Theme Toggle for Mobile */}
            <div className="flex items-center justify-center py-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



