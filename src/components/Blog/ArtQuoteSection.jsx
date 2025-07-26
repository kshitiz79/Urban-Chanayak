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
        .split(" ")
        .map((char) => `<span class="text-gray-700 ">${char}</span>`)
        .join(" ");
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
    <div className="scroll-smooth bg-orange-500 min-h-screen py-20 md:px-20">
      <div className=" mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div ref={textRef} className="flex-1 z-2 max-w-5xl">
                      <p className="text-5xl text-gray-700 italic mb-6 -mt-4">The Assam Model</p>
          <p className="text-4xl md:text-6xl font-bold mb-4 -mr-4 " >
            <span className="text-gray-100">These two case studies highlight two distinct yet successful approaches to political brand-building on social media.</span>
          </p>

        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          <div className="w-full   z-0">
          <img
              src="/assammodel.png" 
              alt="Artwork by Meg O'Hara"
              loading="lazy"
            /> 
             
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ArtQuoteSection;