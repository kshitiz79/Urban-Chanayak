"use client";

import Image from "next/image";
import React from "react";

const AudioVideo = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-screen bg-gray-100  text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 md:py-16 py-0 flex flex-col justify-center bg-gray-100 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Audio-Visual Production</h1>

        <ul className="text-lg font-semibold space-y-2">
          <li>• Creative Storytelling</li>
          <li>• State-of-the-Art Technology</li>
          <li>• Professional Execution</li>
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Crafting impactful theme songs that people repeatedly request,
            even years after their release, is no small feat. Within a mere
            3.5 years, we've crafted numerous standout video ads, theme
            songs, and radio jingles for a wide range of clients.
          </p>
          <p>
            Our expert team is committed to providing a seamless,
            professional video production service. From engaging awareness
            videos to compelling theme songs, we offer a variety of video
            styles to meet your strategic needs. With Urban Chanakya, rest
            assured your message will not only reach but deeply resonate
            with your audience.
          </p>
        </div>

        <div>
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase hover:text-orange-600 transition-colors"
          >
            Crafting Stories That Resonate Across Generations
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-auto">
        <Image
          src="/audio.gif" // Ensure this path is correct
          alt="Audio-Visual Production example"
          fill
          className="cover"
          priority
        />
      </div>
    </section>
  );
};

export default AudioVideo;
