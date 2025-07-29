// components/ContentCreation.tsx

"use client";

import Image from "next/image";
import React from "react";

const ContentCreation = () => {
  return (
    <section className="relative scroll-smooth sticky top-0 w-full h-auto bg-white text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-10 md:py-16 flex flex-col justify-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">Content Creation and Design</h1>

        <ul className="text-lg font-semibold space-y-1">
          <li>• Strategic Content</li>
          <li>• Creative Design</li>
          <li>• Measurable Impact</li>
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Urban Chanakya specializes in Content & Design Services, catering to
            the diverse needs of clients with expert copywriting, content
            creation, and stunning design. Our seasoned writers and innovative
            designers work hand in hand to ensure your brand identity and
            narratives not only resonate with but also convert your target
            audience.
          </p>
          <p>
            From crafting iconic logos and engaging social media content to designing
            dynamic hoardings, print ads, prospectuses, and television ads, we tailor
            each piece to amplify your message effectively.
          </p>
          <p>
            If you’re active on Twitter, you're likely familiar with our impact.
            Urban Chanakya stands at the forefront of Content & Design, expertly
            bridging the gap between your brand and its audience with unmatched
            precision and creativity.
          </p>
        </div>

        <div>
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase hover:text-orange-600 transition-colors"
          >
            Creative Content, Dynamic Design
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-[100vh] md:min-h-full">
        <Image
          src="/content.png" // Ensure this image path is correct
          alt="Content Creation and Design"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default ContentCreation;
