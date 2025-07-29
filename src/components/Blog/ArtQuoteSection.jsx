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
        .map((char) => `<span class="text-gray-700">${char}</span>`)
        .join(" ");
    });

    const spans = textRef.current.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { color: "#ffffff" },
        {
          color: "#000000",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-smooth bg-orange-500 min-h-screen py-16 px-4 md:px-20">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div ref={textRef} className="flex-1 z-10 max-w-5xl">
          <p className="text-3xl sm:text-4xl md:text-5xl text-gray-700 italic mb-4">
            The Assam Model
          </p>
          <p className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-100">
            These two case studies highlight two distinct yet successful approaches to political brand-building on social media.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full">
          <img
            src="/assammodel.png"
            alt="Artwork by Meg O'Hara"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtQuoteSection;
