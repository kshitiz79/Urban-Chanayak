"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1080;

  const fadeStart = 1 * screenHeight;
  const fadeEnd = 2 * screenHeight;
  const videoFadeStart = 2 * screenHeight;
  const videoFadeEnd = 6 * screenHeight;

  // Text opacity: fades between 1 → 2 scrolls
  const textOpacity =
    scrollY < fadeStart
      ? 1
      : scrollY > fadeEnd
      ? 0
      : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);

  // Black overlay opacity: fades in between 2 → 6 scrolls
  const overlayOpacity = Math.min(
    Math.max((scrollY - videoFadeStart) / (videoFadeEnd - videoFadeStart), 0),
    1
  );

  // Show final heading at bottom after ~5.2 scrolls
  const showFinalHeading = scrollY > screenHeight * 5.2;

  return (
    <section className="relative w-full" style={{ height: "600vh", zIndex: 10 }}>
      {/* Sticky Layer */}
      <div className="sticky top-0 w-full h-screen overflow-hidden" style={{ zIndex: 5 }}>
        {/* Background Video */}
        <video
          className="absolute top-0  left-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Fade-to-black Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black"
          style={{ opacity: overlayOpacity, transition: "opacity 0.3s ease-out" }}
        />

        {/* Center Text Box */}
        <div className="relative z-10 flex justify-center items-center h-full text-center">
          <div
            className="rounded-[6rem] px-10 md:px-60 py-12 bg-white transition-opacity duration-300"
            style={{ opacity: textOpacity }}
          >
            <h1 className="text-4xl md:text-8xl text-black font-normal font-sans text-center">
              We Create The <br /> Impact
            </h1>
          </div>
        </div>

        {/* Final Bottom Heading */}
        {showFinalHeading && (
          <div className="absolute bottom-20 w-full text-center z-20">
            <h2 className="text-white text-5xl md:text-5xl font-bold tracking-wide">
            Urban Chanakya is for
            </h2>
          </div>
        )}
      </div>

      {/* Next Section */}
      <div className="relative w-full h-[100vh] bg-white z-0">
        <div className="text-black text-4xl font-semibold p-20">
          👋 This is the next component.
        </div>
      </div>
    </section>
  );
};

export default Hero;
