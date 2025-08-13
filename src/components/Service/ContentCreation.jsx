// components/ContentCreation.tsx

"use client";

import Image from "next/image";
import React from "react";

const ContentCreation = () => {
  return (
    <section className="relative scroll-smooth sticky md:top-0 w-full md:h-screen -top-100 bg-white text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-10 md:py-16 flex flex-col justify-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">Publishing, Design & Print Solutions</h1>

        <ul className="text-lg font-semibold space-y-1">
          <li>•	Coffee Table Books & Booklet Design</li>
<li>•	Concept-to-Print Publications</li>
<li>•	Leaflets, Pamphlets, Posters & Reports</li>
<li>•	Print & Production Management</li>
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
           Ink meets innovation in everything we create. At Urban Chanakya, print is not just a medium, but a manifestation of strategy and storytelling. From timeless coffee table books to crisp brochures and meticulously designed reports, we turn complex ideas into beautifully crafted publications. Each piece is designed to capture, captivate, and communicate - page after page, print after print.
          </p>
       
        </div>

       
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-[100vh] md:min-h-full">
        <Image
          src="/contect.png" // Ensure this image path is correct
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
