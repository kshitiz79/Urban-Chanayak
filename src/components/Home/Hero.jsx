"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [hoverTransform, setHoverTransform] = useState("translateX(0)");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const edgeThreshold = rect.width * 0.2;

    if (x < edgeThreshold) {
      setHoverTransform("translateX(-12px)");
    } else if (x > rect.width - edgeThreshold) {
      setHoverTransform("translateX(12px)");
    } else {
      setHoverTransform("translateX(0)");
    }
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1080;

  // Adjusted for 5 screen scrolls
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
    <section className="relative w-full md:h-[480vh] h-[300vh] z-10" >
      {/* Sticky Layer */}
      <div className="sticky top-0 w-full h-screen overflow-hidden" style={{ zIndex: 5 }}>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Fade-to-black Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black"
          style={{ opacity: overlayOpacity, transition: "opacity 0.2s ease-out" }}
        />

        {/* Center Text Box */}
        <div className="relative z-10 flex justify-center items-center h-full text-center">
          <div
            className="md:rounded-[8rem] rounded-[4rem] px-10 md:px-60 md:py-24 py-10 bg-white  text-black transition-opacity duration-100 hover:bg-orange-500 hover:text-white"
            style={{ opacity: textOpacity }}
          >
            <h1 className="text-4xl md:text-8xl font-telegraf text-center hover:text-white">
              We Create The <br /> Impact
            </h1>
          </div>
        </div>

        {/* Final Bottom Heading */}
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
