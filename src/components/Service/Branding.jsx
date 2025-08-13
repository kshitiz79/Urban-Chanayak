"use client";

import Image from "next/image";
import React from "react";

const Branding = () => {
  return (
    <section className="relative sticky md:top-0 md:h-[110vh] -top-50 h-[130vh] scroll-smooth w-full bg-white text-black min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-16 py-10 md:py-16 flex flex-col justify-center bg-gray-300">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
         Branding & Event Management
        </h1>

        <ul className="text-base sm:text-md font-semibold space-y-2 mb-6">
          <li> •	Event Branding, Logistics & Infrastructure</li>
          <li>•	Sports Branding & Management</li>
          <li>•	Traditional & Digital Event Promotion</li>
          <li>•	Exhibition Stall Design</li>
          <li>•	Venue & Location-Based Branding</li>

        </ul>

        <div className="text-gray-800 text-base sm:text-md leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
         Impact begins where execution meets emotion. From stadiums to summits, our end-to-end solutions fuse creative direction with operational precision - delivering impactful experiences that captivate audiences and elevate perception. Whether it’s a high-stakes political event, high-octane sports arenas or high-footfall public exhibition, we build an environment where your brand isn’t just seen - it’s felt.</p>
         
        </div>

      
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-auto">
        <Image
          src="/branding.gif"
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Branding;
