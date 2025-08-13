"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="sticky top-0 w-full md:min-h-screen h-[120vh] bg-white text-black flex flex-col md:flex-row scroll-smooth">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-16 md:py-12 py-16 flex flex-col justify-center md:mt-0 mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Integrated Marketing & IEC Campaigns
        </h1>

        <ul className="text-sm sm:text-lg font-semibold space-y-2 mb-6">
          <li>
            •	Information, Education & Communication (IEC)
          </li>
          <li>
            •	e-Commerce Management </li><li>•	Traditional & Digital Advertising </li><li>•	Strategic Planning & Positioning </li><li>
              •	Identity Crafting & Brand Management
          </li>
        </ul>

        <div className="text-gray-800 text-lg sm:text-base leading-relaxed border-t border-gray-300 pt-6 space-y-8">
          <p>
            Impactful campaigns do more than inform - they influence, inspire, and ignite action. From shaping public awareness through IEC initiatives to crafting bold brand identities and full-spectrum marketing strategies, Urban Chanakya brings coherence to communication. Whether on ground or online, through ads, storytelling, or e-commerce ecosystems, we engineer narratives that connect deeply and leave a lasting impact.
          </p> 
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
