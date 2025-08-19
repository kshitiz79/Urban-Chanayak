"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // For mobile toggle icon

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white " : "bg-transparent"
      }`}
    >
      <div className="max-w-screen mx-auto px-4 md:px-8 py-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="w-48 h-38 flex items-start justify-start">
            <img src="/logo1.png" alt="Logo" className="h-full object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 text-xl ">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/our-service", label: "Our Services" },
              { href: "/blog-page", label: "Blogs" },
              { href: "/careers", label: "Careers" },
              { href: "/contact-us", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 bg-white rounded-3xl transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 hover:text-orange-500 focus:outline-none"
            >
              {isDropdownOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="md:hidden bg-white shadow-md rounded-xl mt-2 py-4 px-6 space-y-3 transition-all duration-300"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/our-service", label: "Our Services" },
              { href: "/blog-page", label: "Blogs" },
              { href: "/careers", label: "Careers" },
              { href: "/contact-us", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-800 px-2 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
