// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Integrated Marketing</h1>

        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>• Content Marketing &nbsp;&nbsp; • Traditional Advertising &nbsp;&nbsp; • Digital Advertising</li>
          <li>• Performance Monitoring &nbsp;&nbsp; • Audience Segmentation &nbsp;&nbsp; </li>
          <li>• Strategic Planning</li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          Strategizing synergy, crafting narratives, and amplifying brand resonance through seamlessly integrated marketing solutions
          </p>
          <p>
          We specialize in synergizing strategies, crafting compelling narratives, and enhancing brand resonance through seamlessly integrated marketing solutions tailored to elevate your brand's visibility and impact.
          </p>
        </div>

        <div className="pt-6">
          <a href="#" className="text-black font-medium underline underline-offset-4 uppercase">
          Synergized Marketing Excellence
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[80vh] md:min-h-full -m-10">
        <Image
          src="/integrated.png" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
