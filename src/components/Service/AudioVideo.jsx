// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const AudioVideo = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center -mt-10 -mb-10 bg-gray-100">
        <h1 className="text-5xl font-bold mb-6">Audio-Visual Production</h1>
        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>
            • Creative Storytelling &nbsp;&nbsp; • State-of-the-Art
            Technology&nbsp;&nbsp;{" "}
          </li>
          <li>• Professional Execution </li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          Crafting impactful theme songs that people repeatedly request, even years after their release, is no small feat.Within a mere 3.5 years, we've crafted numerous standout video ads, theme songs, and radio jingles for a wide range of clients.
          </p>
          <p>
          Our expert team is committed to providing a seamless, professional video production service. From engaging awareness videos to compelling theme songs, we offer a variety of video styles to meet your strategic needs. With Urban Chanakya, rest assured your message will not only reach but deeply resonate with your audience.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase"
          >
           Crafting Stories That Resonate Across Generations
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="/audio.gif" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AudioVideo;
