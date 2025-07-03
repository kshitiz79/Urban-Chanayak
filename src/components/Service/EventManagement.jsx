// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const EventManagement = () => {
  return (
    <section className="sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center -mt-10 -mb-10 bg-gray-100">
        <h1 className="text-5xl font-bold mb-6">Event Management</h1>
        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>
            • Strategic Content &nbsp;&nbsp; • Creative Design&nbsp;&nbsp;{" "}
          </li>
          <li>• Measurable Impact</li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          At Urban Chanakya we excel in orchestrating government & socio-political Events that deliver a deep tangible impact. Our adeptness at transforming concepts into tangible experiences sets us apart, ensuring each event is a symphony of meticulous planning, creative flair, and impeccable execution. From the birth of an idea to the final standing ovation, our suite of services covers every beat — event design, logistics, production, branding, and beyond. We're your backstage crew and front-of-house maestros, guaranteeing that every detail resonates with your narrative and captivates the crowd.
          </p>
          <p>
          We excel in organizing impactful government and socio-political events, leaving a tangible and profound impression.
          </p>
        </div>

        <div className="pt-6">
          <a href="#" className="text-black font-medium underline underline-offset-4 uppercase">
          Crafting Unforgettable Identities for Impactful Events
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[64vh] md:min-h-full -m-10">
        <video src="/event.mp4" autoPlay loop muted
  playsInline
  className="w-full h-auto object-cover"></video>
      </div>
    </section>
  );
};

export default EventManagement;
