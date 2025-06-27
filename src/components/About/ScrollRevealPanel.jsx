"use client";
import React, { useEffect, useState } from "react";

const ScrollRevealPanel = () => {
  const [scrollY, setScrollY] = useState(0);

  // capture scroll value
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // calculate translateY for reveal effect
  const translateY = Math.min(scrollY / 2, window.innerHeight); // speed control
  const overlayTranslate = `translateY(-${translateY}px)`;

  return (
    <section className="relative w-full h-[300vh] bg-white">
      {/* Sticky black overlay */}
      <div
        className="sticky top-0 h-screen w-full z-20 bg-black flex items-center justify-center transition-transform duration-300"
        style={{ transform: overlayTranslate }}
      >
        <h1 className="text-white text-6xl md:text-8xl font-bold">Fearless Impact</h1>
      </div>

      {/* Revealed content underneath */}
      <div className="absolute top-0 h-[300vh] w-full z-10">
        <div className="h-screen flex items-center justify-center bg-[#f86c28] text-white px-10">
          <p className="text-3xl md:text-5xl font-telegraf max-w-3xl text-center">
            We create immersive brand experiences that leave a mark — not by following trends, but by rewriting the rules.
          </p>
        </div>

        <div className="h-screen bg-white flex items-center justify-center px-10">
          <p className="text-xl md:text-3xl text-black max-w-2xl text-center">
            Brands today need clarity, courage, and creative conviction. That’s where we come in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealPanel;
