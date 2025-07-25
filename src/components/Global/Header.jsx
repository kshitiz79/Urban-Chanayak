"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import BlendBox from "./BlendBox";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // change header bg on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed  top-0 left-0 w-full z-50">
      <div className="">
      <div className="md:px-18 ">
        <div className="flex items-center justify-between">
          {/* BlendBox logo/marker */}
          <div className="w-38 h-24 -ml-9 founded-full flex items-center justify-center ">
            <img
              src="/logo1.png"
              alt=""
              className=""
            />
          </div>

          {/* Navigation */}
          <nav className="flex space-x-4 text-xl">
            <Link
              href="/"
              className="text-gray-700 hover:bg-orange-500 p-2 px-4 bg-white hover:text-white rounded-3xl transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-orange-500 p-2 px-4 bg-white hover:bg-orange-500 hover:text-white rounded-3xl transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="/our-service"
              className="text-gray-700 hover:text-orange-500 p-2 px-4 bg-white hover:bg-orange-500 hover:text-white  rounded-3xl transition-all duration-300"
            >
              Our Services
            </Link>
            <Link
              href="/blog-page"
              className="text-gray-700 hover:text-orange-500 p-2 px-4 bg-white hover:bg-orange-500 hover:text-white rounded-3xl transition-all duration-300"
            >
              Blogs
            </Link>
            <Link
              href="/careers"
              className="text-gray-700 hover:text-orange-500 p-2 px-4 bg-white hover:bg-orange-500 hover:text-white rounded-3xl transition-all duration-300"
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-orange-500 p-2 px-4 bg-white hover:bg-orange-500 hover:text-white rounded-3xl transition-all duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
      </div>
    </header>
  );
}
