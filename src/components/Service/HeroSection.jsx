"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="sticky top-0 w-full md:min-h-screen h-[120vh] bg-white text-black flex flex-col md:flex-row scroll-smooth">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-16 py-12 sm:py-16 flex flex-col justify-center md:mt-0 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Integrated Marketing
        </h1>

        <ul className="text-base sm:text-lg font-semibold space-y-2 mb-6">
          <li>
            • Content Marketing &nbsp;&nbsp; • Traditional Advertising &nbsp;&nbsp; • Digital Advertising
          </li>
          <li>
            • Performance Monitoring &nbsp;&nbsp; • Audience Segmentation
          </li>
          <li>• Strategic Planning</li>
        </ul>

        <div className="text-gray-800 text-sm sm:text-base leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Strategizing synergy, crafting narratives, and amplifying brand resonance through seamlessly integrated marketing solutions
          </p>
          <p>
            We specialize in synergizing strategies, crafting compelling narratives, and enhancing brand resonance through seamlessly integrated marketing solutions tailored to elevate your brand's visibility and impact.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase text-sm sm:text-base"
          >
            Synergized Marketing Excellence
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-auto">
        <Image
          src="/integrated.png"
          alt="Branding Billboard"
          fill
          className="cover"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
