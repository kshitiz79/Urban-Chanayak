"use client";

import Image from "next/image";
import React from "react";

const PaidPromotion = () => {
  return (
    <section className="relative scroll-smooth sticky md:top-0 w-full md:h-screen -top-60 h-[140vh] bg-white text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-12 flex flex-col justify-center bg-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Social Media Management</h1>

        <ul className="text-base md:text-lg font-semibold space-y-2 mb-6">

          <li>      •	Strategic SM Planning</li>
          <li>•	Content Creation & Publishing</li>
          <li>•	Community Management	</li>
          <li>•	Campaign Management</li>
          <li>•	Crisis & Reputation Management</li>
          <li>•	Platform Innovation & Trends</li>
          <li>•	Influence Management & Paid Promotions</li>
          <li>•	Performance Analysis & Reporting</li>

        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
           Urban Chanakya turns social platforms into strategic battlegrounds. Every post, every comment, every click is part of a larger plan - engineered to shape perception, spark engagement, and drive action. From content crafted from virality to analytics-based strategy, from crisis control to influence management, we don’t just ride the algorithm - we weaponize it for you. Data-driven. Message-aligned. Impact-assured.
          </p>
         
        </div>

    
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
        <Image
          src="/paid.png"
          alt="Paid Promotion Visual"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default PaidPromotion;
