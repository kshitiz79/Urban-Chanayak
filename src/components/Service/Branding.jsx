// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const Branding = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center bg-gray-300 -mt-10 -mb-10">
        <h1 className="text-5xl font-bold mb-6">Branding & Strategy</h1>

        <ul className="text-lg font-semibold space-y-2 mb-6">
        <li>• Content Marketing &nbsp;&nbsp; • Traditional Advertising &nbsp;&nbsp; • Digital Advertising</li>
          <li>• Identity Crafting &nbsp;&nbsp; • Strategic Positioning &nbsp;&nbsp; </li>
          <li>•Competitive Differentiation</li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          At Urban Chanakya, our dedicated team meticulously sculpts compelling brand narratives, reinforcing identities, and driving businesses forward through the precise identification and rectification of strategic gaps. Whether it's crafting distinctive brand stories or introducing new identities, our customized Advertising & Branding Services guarantee that your message resonates profoundly with the intended audience. Our approach is guided by a strategic vision and informed by expert market insights, ensuring unparalleled effectiveness and impact.
          </p>
          <p>
          We craft powerful brand narratives, strengthen identities, and drive business growth by addressing strategic gaps.
          </p>
        </div>

        <div className="pt-6">
          <a href="#" className="text-black font-medium underline underline-offset-4 uppercase">
          Crafting Excellence in Branding and Strategy
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="/branding.gif" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Branding;
