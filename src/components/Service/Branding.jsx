"use client";

import Image from "next/image";
import React from "react";

const Branding = () => {
  return (
    <section className="relative sticky md:top-0 md:h-[110vh] -top-50 h-[130vh] scroll-smooth w-full bg-white text-black min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-16 py-10 md:py-16 flex flex-col justify-center bg-gray-300">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Branding & Strategy
        </h1>

        <ul className="text-base sm:text-md font-semibold space-y-2 mb-6">
          <li>
            • Content Marketing &nbsp;&nbsp; • Traditional Advertising &nbsp;&nbsp; • Digital Advertising
          </li>
          <li>
            • Identity Crafting &nbsp;&nbsp; • Strategic Positioning
          </li>
          <li>• Competitive Differentiation</li>
        </ul>

        <div className="text-gray-800 text-base sm:text-md leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            At Urban Chanakya, our dedicated team meticulously sculpts compelling brand narratives, reinforcing identities, and driving businesses forward through the precise identification and rectification of strategic gaps. Whether it's crafting distinctive brand stories or introducing new identities, our customized Advertising & Branding Services guarantee that your message resonates profoundly with the intended audience. Our approach is guided by a strategic vision and informed by expert market insights, ensuring unparalleled effectiveness and impact.
          </p>
          <p>
            We craft powerful brand narratives, strengthen identities, and drive business growth by addressing strategic gaps.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase"
          >
            Crafting Excellence in Branding and Strategy
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-auto">
        <Image
          src="/branding.gif"
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Branding;
