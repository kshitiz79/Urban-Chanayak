"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Mount + screen height
  useEffect(() => {
    setMounted(true);
    setScreenHeight(window.innerHeight);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  // Scroll math (SAFE now)
  const fadeStart = 1 * screenHeight;
  const fadeEnd = 2 * screenHeight;
  const videoFadeStart = 2 * screenHeight;
  const videoFadeEnd = 4.5 * screenHeight;
  const showFinalHeading = scrollY > screenHeight * 4.2;

  const textOpacity =
    scrollY < fadeStart
      ? 1
      : scrollY > fadeEnd
        ? 0
        : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);

  const overlayOpacity = Math.min(
    Math.max((scrollY - videoFadeStart) / (videoFadeEnd - videoFadeStart), 0),
    1
  );

  return (
    <section className="relative w-full md:h-[480vh] h-[300vh] z-10">
      <div className="sticky top-0 w-full h-screen overflow-hidden z-[5]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          muted
          loop
          playsInline
          autoPlay
        />

        <div
          className="absolute inset-0 bg-black transition-opacity duration-200"
          style={{ opacity: overlayOpacity }}
        />

        <div className="relative z-10 flex items-center justify-center h-full">
          <div
            className="md:rounded-[8rem] rounded-[4rem] px-10 md:px-60 md:py-24 py-10 bg-white text-black transition-opacity duration-100 hover:bg-orange-500 hover:text-white"
            style={{ opacity: textOpacity }}
          >
            <h1 className="text-4xl md:text-8xl font-telegraf text-center">
              We Create The <br /> Impact
            </h1>
          </div>
        </div>

        {showFinalHeading && (
          <div className="absolute bottom-20 w-full text-center z-20 py-6">
            <h2 className="text-white text-5xl md:text-5xl font-bold tracking-wide">
              Urban Chanakya is for
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
