"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Associate services with paths
  const services = [
    { name: 'Integrated Marketing', path: '/services/integrated-marketing' },
    { name: 'Branding & Strategy', path: '/services/branding-strategy' },
    { name: 'Election Management', path: '/services/election-management' },
    { name: 'Digital & Social Media', path: '/services/digital-social-media' },
    { name: 'Paid Promotions', path: '/services/paid-promotions' },
    { name: 'Event Management', path: '/services/event-management' },
    { name: 'Content Creation and Design', path: '/services/content-creation-design' },
    { name: 'PR Management', path: '/services/pr-management' },
    { name: 'Web Design', path: '/services/web-devlopment' },
    { name: 'Audio-Visual Productions', path: '/services/audio-visual-productions' },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo or brand name */}
          <div className=""><img src="https://urbanchanakya.in/wp-content/uploads/2024/04/logo-uc.png" className='w-28'/></div>

          {/* Navigation links */}
          <nav className="flex space-x-6 text-black">
            <Link href="/" className="text-gray-700 hover:text-white p-2 px-4 bg-white hover:bg-transparent rounded-3xl transition-all duration-300">
              Home
            </Link>
             <a href="/about-us" className="text-gray-700 hover:text-white p-2 px-4 bg-white hover:bg-transparent rounded-3xl transition-all duration-300">
              About Us
            </a>

            {/* Our Services with Dropdown */}
            <div className="relative mt-2" ref={dropdownRef}>
              <a
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className="text-gray-700 hover:text-white p-2 px-4 py-3 bg-white hover:bg-transparent rounded-3xl transition-all duration-300"
              >
                Our Services
              </a>

              <div
                className={`absolute top-full left-0 mt-4 w-[30rem] bg-white rounded-lg shadow-lg py-4 px-2 transition-all duration-300 ease-in-out transform origin-top ${
                  isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                }`}
                style={{ transformOrigin: 'top' }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                   <Link
            key={index}
            href={service.path}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black rounded-md text-sm transition-all duration-200"
          >
            {service.name}
          </Link>
                  ))}
                </div>
              </div>
            </div>


           
             <Link
    href="/blog-page"
    className="text-gray-700 hover:text-white p-2 px-4 bg-white hover:bg-transparent rounded-3xl transition-all duration-300"
  >
    Blogs
  </Link>
            <Link
    href="/contact-us"
    className="text-gray-700 hover:text-white p-2 px-4 bg-white hover:bg-transparent rounded-3xl transition-all duration-300"
  >
    Contact Us
  </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
