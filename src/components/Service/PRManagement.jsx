// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const PRManagement = () => {
  return (
    <section className="relative sticky md:top-0 md:h-[110vh] -top-50 h-[120vh] w-full min-h-screen flex flex-col md:flex-row bg-white text-black">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-12 md:py-16 flex flex-col justify-center bg-white z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          PR Management
        </h1>

        <ul className="text-base sm:text-lg font-semibold space-y-2 mb-6">
          <li>
            • Reputation Enhancement &nbsp;&nbsp; • Media Relations
          </li>
          <li>• Crisis Management</li>
        </ul>

        <div className="text-gray-800 text-base sm:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Urban Chanakya distinguishes itself with a foundation in thorough
            problem identification and tailoring unique solutions. In a field
            often reliant on generic templates and methodologies, we venture
            into innovative territories for every project. Renowned for its
            exceptional delivery, superior execution stands as a hallmark of
            Urban Chanakya's service.
          </p>
          <p>
            We don't just shift the dynamics; we command them. Our cadre of
            public relations experts excels in harnessing both proactive and
            responsive PR strategies. We're not about mere promotion; we
            position you as a pivotal voice in ongoing discussions, ensuring
            your business and brand become integral to any dialogue, regardless
            of the subject.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase"
          >
            Fostering Connections, Influencing Perspectives, Cultivating
            Meaningful Values
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:min-h-full">
        <Image
          src="/pr.gif"
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default PRManagement;
