"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ArtQuoteSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const paragraphs = textRef.current.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      const text = paragraph.textContent;
      paragraph.innerHTML = text
        .split("")
        .map((char) => `<span class="text-gray-700 inline-block">${char}</span>`)
        .join("");
    });

    const spans = textRef.current.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { color: "#ffffff" }, // Tailwind's gray-500 (adjusted to gray-700 for better contrast)
        {
          color: "#000000", // Black
          stagger: 0.05, // Delay between each letter
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%", // Start when 80% from top
            end: "bottom 20%", // End when 20% from bottom
            scrub: 1, // Smooth scroll syncing
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-orange-500 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div ref={textRef} className="flex-1 z-2">
          <p className="text-4xl md:text-6xl font-bold text-black mb-4" >
            <span className="text-gray-100">"I see my art as a form of science communication, bridging the gap between academia and the general population to show this beautiful landscape."</span>
          </p>
          <p className="text-lg text-gray-700 italic">- Meg O’Hara</p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 -ml-24 z-0">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?fit=crop&w=400&h=300" 
              alt="Artwork by Meg O'Hara"
              className="w-full h-[40vh] object-cover rounded-lg shadow-md mt-80 "
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-2/3">
            <img
              src="https://cdn.prod.website-files.com/66336211b81e8a10a1428f79/6659a211fb7fcee3d67868ce_PC%20Elliott%20Muscat-min.webp" 
              alt="Meg O'Hara in gallery"
              className="w-[200vh] h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtQuoteSection;