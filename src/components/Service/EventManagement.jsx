// components/EventManagement.tsx

"use client";

import React from "react";

const EventManagement = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full min-h-screen bg-white text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-4 md:px-16 py-10 md:py-16 flex flex-col justify-center bg-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Political Management</h1>

        <ul className="text-base md:text-lg font-semibold space-y-2 mb-6">
          <li>•	Strategic Political Communication</li>
          <li>•	High- Impact Leadership Branding</li>
          <li>•	Narrative-Driven IEC Campaigns</li>
          <li>•	Ground Intelligence, Data Insights, Survey & Research</li>
          <li>•	Political Management Analytical Tools</li>
    
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-4 md:pt-6 space-y-4">
          <p>
           Urban Chanakya specializes in scripting winning narratives - on ground and online. Whether you are entering your first fray in politics or are a veteran leader, a fledgling political outfit or a party with a pan-India footprint, Urban Chanakya is here to amplify your message right into the hearts and minds of the people.
          </p>
         
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
