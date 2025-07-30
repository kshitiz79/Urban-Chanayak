// components/ElectionManagement.tsx

"use client";

import Image from "next/image";
import React from "react";

const ElectionManagement = () => {
  return (
    <section className="relative sticky md:top-0 -top-100 md:h-[100vh] h-[200vh] scroll-smooth w-full bg-white text-black md:min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-16 py-10 sm:py-14 md:py-20 flex flex-col justify-center bg-gray-200">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Election Management
        </h1>

        <ul className="text-base sm:text-lg font-semibold space-y-2 mb-6">
          <li>
            • Process Optimization &nbsp;&nbsp; • Transparency Assurance &nbsp;&nbsp;
          </li>
          <li>• Stakeholder Engagement</li>
        </ul>

        <div className="text-gray-800 text-base sm:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Empowering aspiring leaders and change-makers, Urban Chanakya is the preferred platform for young visionaries and professionals to actively engage in shaping the political landscape and governance, transcending traditional party affiliations.
          </p>
          <p>
            We started our journey in the mid-pandemic timezone. Urban Chanakya unites exceptional minds from diverse backgrounds, offering a distinctive opportunity to contribute to the electoral process and influence policy decisions in Assam/North-East India.
          </p>
          <p>
            Collaborating with visionary leaders of proven excellence, Urban Chanakya assists in crafting citizen-centric agendas, implementing impactful strategies, and garnering widespread public support for transformative governance.
          </p>
          <p>
            Ce service s’adresse autant aux marques qui se lancent qu’à celles qui souhaitent évoluer et affirmer une nouvelle image.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase text-sm sm:text-base"
          >
            Navigating victories through strategic precision
          </a>
        </div>
      </div>

      {/* Right image */}
     <div className="w-full md:w-1/2 relative h-[50vh] min-h-[300px] md:h-auto bg-gray-300">

        <Image
          src="/election.gif" // Replace with your image path
          alt="Election Campaign"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default ElectionManagement;
