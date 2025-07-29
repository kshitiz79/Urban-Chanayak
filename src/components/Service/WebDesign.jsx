"use client";

import Image from "next/image";
import React from "react";

const WebDesign = () => {
  return (
    <section className=" relative sticky top-0 h-[110vh] scroll-smooth w-full min-h-screen bg-white  text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-10 flex flex-col justify-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design</h1>

        <ul className="text-base md:text-lg font-semibold space-y-2 mb-6">
          <li>• Visual Appeal &nbsp;&nbsp; • User Experience</li>
          <li>• Brand Identity Integration</li>
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            At Urban Chanakya, we specialize in creating custom websites and web portals tailored for government bodies and corporate entities. Our focus on SEO-friendly content ensures that your digital presence is not only visually appealing but also ranks well on search engines.
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
      <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
        <Image
          src="/webdesign.gif"
          alt="Web Design"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default WebDesign;
