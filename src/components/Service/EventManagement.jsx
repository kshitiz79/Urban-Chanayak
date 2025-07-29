// components/EventManagement.tsx

"use client";

import React from "react";

const EventManagement = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full min-h-screen bg-white text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-4 md:px-16 py-10 md:py-16 flex flex-col justify-center bg-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Event Management</h1>

        <ul className="text-base md:text-lg font-semibold space-y-2 mb-6">
          <li>• Strategic Content &nbsp;&nbsp; • Creative Design</li>
          <li>• Measurable Impact</li>
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-4 md:pt-6 space-y-4">
          <p>
            At Urban Chanakya we excel in orchestrating government & socio-political
            Events that deliver a deep tangible impact. Our adeptness at transforming
            concepts into tangible experiences sets us apart, ensuring each event is a
            symphony of meticulous planning, creative flair, and impeccable execution.
            From the birth of an idea to the final standing ovation, our suite of
            services covers every beat — event design, logistics, production,
            branding, and beyond. We're your backstage crew and front-of-house
            maestros, guaranteeing that every detail resonates with your narrative and
            captivates the crowd.
          </p>
          <p>
            We excel in organizing impactful government and socio-political events,
            leaving a tangible and profound impression.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase text-sm md:text-base"
          >
            Crafting Unforgettable Identities for Impactful Events
          </a>
        </div>
      </div>

      {/* Right image / video */}
      <div className="w-full md:w-1/2 relative h-[100vh] md:h-screen">
        <img
          src="/event.gif" // Ensure this video path is correct
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default EventManagement;
