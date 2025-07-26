// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const PRManagement = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">PR Management</h1>

        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>
            • Reputation Enhancement &nbsp;&nbsp; • Media Relations &nbsp;&nbsp;{" "}
          </li>
          <li>• Crisis Management </li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Urban Chanakya distinguishes itself with a foundation in thorough
            problem identification and tailoring unique solutions. In a field
            often reliant on generic templates and methodologies, we venture
            into innovative territories for every project. Renowned for its
            exceptional delivery, superior execution stands as a hallmark of
            Urban Chanakya's service.
          </p>
          <p>
          We don't just shift the dynamics; we command them. Our cadre of public relations experts excels in harnessing both proactive and responsive PR strategies. We're not about mere promotion; we position you as a pivotal voice in ongoing discussions, ensuring your business and brand become integral to any dialogue, regardless of the subject.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase"
          >
           Fostering Connections, Influencing Perspectives, Cultivating Meaningful Values
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="/pr.gif" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default PRManagement;
