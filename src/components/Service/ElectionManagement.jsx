// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const ElectionManagement = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center bg-gray-200 -mt-10 -mb-10">
        <h1 className="text-5xl font-bold mb-6">Election Management</h1>

        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>• Process Optimization &nbsp;&nbsp; • Transparency Assurance &nbsp;&nbsp; </li>
          <li>• Stakeholder Engagement </li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          Empowering aspiring leaders and change-makers, Urban Chanakya is the preferred platform for young visionaries and professionals to actively engage in shaping the political landscape and governance, transcending traditional party affiliations.
</p>
<p>
We started our journey in the mid-pandemic timezone, Urban Chanakya unites exceptional minds from diverse backgrounds, offering a distinctive opportunity to contribute to the electoral process and influence policy decisions in Assam/North-East India.
</p>
<p>
Collaborating with visionary leaders of proven excellence, Urban Chanakya assists in crafting citizen-centric agendas, implementing impactful strategies, and garnering widespread public support for transformative governance.
          </p>
          <p>
            Ce service s’adresse autant aux marques qui se lancent qu’à celles qui souhaitent évoluer et affirmer une nouvelle image.
          </p>
        </div>

        <div className="pt-6">
          <a href="#" className="text-black font-medium underline underline-offset-4 uppercase">
          Navigating victories through strategic precision
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="/election.gif" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ElectionManagement;
