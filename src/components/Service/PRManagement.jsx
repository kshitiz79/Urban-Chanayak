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
          Media, PR & Digital Engagement
        </h1>

        <ul className="text-base sm:text-lg font-semibold space-y-2 mb-6">
     
          
          <li>  •	Public Relations, Brand Visibility & Media Outreach</li>
          <li>•	Influencer & Celebrity Management</li>
          <li>•	Audience Targeting & Paid Promotions</li>
          <li>•	Live Streaming, 3D LED, Light & Sound Solutions</li>
          <li>•	Theme Songs, TVCs, Audio-Visual Productions</li>
          <li>•	High-end Photography and Drone Videography</li>
          <li>•	Brand Image & Crisis Management</li>
        </ul>

        <div className="text-gray-800 text-base sm:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Perception matters most in the minds of the masses. And that’s where we operate. We don’t just handle PR, media, or celebrity management - we choreograph perception. From headline strategy to high-impact productions, from influencer synergy to immersive real-world experiences, every move is powered by tech and timed for relevance. Whether it's about shaping public sentiment or navigating a crisis, we manage the message - and the moment.
          </p>
          
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
