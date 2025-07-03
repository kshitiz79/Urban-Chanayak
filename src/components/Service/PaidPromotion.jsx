// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const PaidPromotion = () => {
  return (
    <section className="sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center bg-gray-100 -mt-10 -mb-10">
        <h1 className="text-5xl font-bold mb-6">Paid Promotion</h1>

        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>• Audience Targeting &nbsp;&nbsp; • Brand Visibility &nbsp;&nbsp; </li>
          <li>• ROI Optimizationt </li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          At Urban Chanakya, we understand the importance of reaching the right audience at the right time. That's why we offer tailored paid promotion services designed to amplify brand visibility and drive results. Our team meticulously crafts strategic campaigns that leverage various digital channels to ensure maximum impact. From social media advertising to search engine marketing, we employ a data-driven approach to target your ideal customers and optimize campaign performance. With our expertise, you can rest assured that your brand will stand out in today's competitive landscape, reaching new heights of success through effective paid promotion strategies.
          </p>
          <p>
          We specialize in elevating brand visibility through tailored paid promotion services.
          </p>
        </div>

        <div className="pt-6">
          <a href="#" className="text-black font-medium underline underline-offset-4 uppercase">
          Maximize Brand Exposure through Targeted Paid Promotion Services
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="/paid.png" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default PaidPromotion;
