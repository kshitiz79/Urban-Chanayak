"use client";

import Image from "next/image";
import React from "react";

const AudioVideo = () => {
  return (
    <section className="scroll-smooth sticky md:top-0 w-full md:h-screen -top-50 bg-gray-100  text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 md:py-16 py-10 flex flex-col justify-center bg-gray-100 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Audio-Visual Production</h1>

        <ul className="text-lg font-semibold space-y-2">
          <li>•  ⁠High-end Audio/Video Productions</li>
          <li>•  ⁠Campaign Theme Songs</li>
          <li>• Short films and Documentaries</li>
          <li>• ⁠TVC, Jingle, Ads</li>
          <li>• Video Scripts and Closed Captionings</li>
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
          From powerful awareness videos to memorable theme songs, from insightful documentaries to impactful scripts, we deliver a full spectrum of audio-visual solutions designed to achieve your strategic objectives.

          </p>
          <p>
          With Urban Chanakya, your message won’t just be seen or heard – it will connect, inspire, and leave a lasting impact.
          </p>
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
