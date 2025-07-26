// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const ContentCreation = () => {
  return (
    <section className="scroll-smooth sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Content Creation and Design</h1>
        <ul className="text-lg font-semibold space-y-2 mb-6">
          <li>
            • Strategic Content &nbsp;&nbsp; • Creative Design&nbsp;&nbsp;{" "}
          </li>
          <li>• Measurable Impact</li>
        </ul>

        <div className="text-gray-800 text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Urban Chanakya specializes in Content & Design Services, catering to
            the diverse needs of clients with expert copywriting, content
            creation, and stunning design. Our seasoned writers and innovative
            designers work hand in hand to ensure your brand identity and
            narratives not only resonate with but also convert your target
            audience. From crafting iconic logos and engaging social media
            content to designing dynamic hoardings, print ads, prospectuses, and
            television ads, we tailor each piece to amplify your message
            effectively.
          </p>
          <p>
            If you’re active on Twitter, you're likely familiar with our impact.
            Urban Chanakya stands at the forefront of Content & Design, expertly
            bridging the gap between your brand and its audience with unmatched
            precision and creativity.
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="text-black font-medium underline underline-offset-4 uppercase"
          >
            Creative Content, Dynamic Design
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="/content.png" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ContentCreation;
