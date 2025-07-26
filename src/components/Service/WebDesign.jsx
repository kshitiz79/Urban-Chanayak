// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const WebDesign= () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Web Design</h1>

        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>• Visual Appeal &nbsp;&nbsp; • User Experience &nbsp;&nbsp; </li>
          <li>• Brand Identity Integration </li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          At Urban Chanakya, we specialize in creating custom websites and web portals tailored for government bodies and corporate entities. Our focus on SEO-friendly content ensures that your digital presence is not only visually appealing but also ranks well on search engines, maximizing visibility and engagement. Leveraging the latest technologies and design trends, we provide a seamless and intuitive user experience, designed to meet the unique needs of our clients.
          </p>
          <p>
          Trust Urban Chanakya to elevate your online presence and connect you with your audience more effectively.
          </p>
        </div>

        <div className="pt-6">
          <a href="#" className="text-black font-medium underline underline-offset-4 uppercase">
          Designing Digital Experiences, Tailored for Success
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="/webdesign.gif" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default WebDesign;
