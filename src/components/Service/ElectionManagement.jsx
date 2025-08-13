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
         Election & Campaign Management
        </h1>

        <ul className="text-sm sm:text-lg font-semibold space-y-2 mb-6">
          <li>•	Mission-Mode Campaign Execution &nbsp;&nbsp;</li>
          <li> •	Hyperlocal Voter Outreach Solutions  &nbsp;&nbsp;  </li>
          <li>•	Multilingual On-Ground Campaign Management</li>
          <li> •	High-Quality Publicity Materials</li>
          <li>
•	Election-Grade Event Deployment & Field Campaigns &nbsp;&nbsp;</li>
<li> •	War Room & Electoral Call Centre Management</li>
        




        </ul>

        <div className="text-gray-800 text-base sm:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
           Elections are not won by chance - they are engineered through precision, presence, and persuasion. With strategic insights, culturally tuned outreach, and battlefield-level execution, Urban Chanakya activates every political lever - from street to screen, from booth to banner. Our operations integrate real-time intelligence, multilingual field forces, high-impact political contents, and central war-room command to ensure one outcome: a decisive win. </p>
         
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
