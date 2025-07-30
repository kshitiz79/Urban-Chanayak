"use client";
import React, { useEffect, useRef, useState } from "react";

const SectioonLast = () => {
  const gateRef = useRef(null);       // watcher for first screen
  const overlayRef = useRef(null);    // for fading overlay
  const [whitePhase, setWhitePhase] = useState(true);
  const [overlayOpacity, setOverlayOpacity] = useState(1); // fully white at start

  // Toggle background white only during the first viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setWhitePhase(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (gateRef.current) observer.observe(gateRef.current);
    return () => {
      if (gateRef.current) observer.disconnect();
    };
  }, []);

  // Fade overlay based on scroll progress (slow fade across multiple scrolls)
  useEffect(() => {
    const handleScroll = () => {
      if (!overlayRef.current) return;

      const rect = overlayRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));

      // Smooth fade from 1 → 0 across 2-3 scroll heights
      const opacity = 1 - Math.min(scrollProgress * 1.5, 1); // slower fade
      setOverlayOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full md:h-[310vh] h-[230vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full  object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* FIRST SECTION WITH WHITE BG INITIALLY */}
      <div
        ref={gateRef}
        className="absolute top-0 left-0 w-full md:h-[100vh] h-[60vh] z-10"
        style={{ backgroundColor: whitePhase ? "transparent" : "white" }}
      >
        {/* Image Card Section */}
        <section className="w-full h-full md:p-8 p-0 px-10 flex items-center md:mb-0 ">
          <div className="flex flex-col md:flex-row bg-black rounded-2xl overflow-hidden w-full">
            {/* Left Image */}
            <div className="w-full md:w-3/4 relative h-56 md:h-[39rem] md:mb-0">
              <img
                src="/image2.png"
                alt="Visual"
                className="absolute inset-0 w-full h-full cover"
              />
            </div>
            {/* Right Text */}
            <div className="w-full md:w-1/4 p-5 flex items-end">
              <p className="text-gray-50 hover:text-orange-500 md:text-2xl text-lg font-semibold">
                From campaign reels to interactive content — every frame tells
                your story with impact.
              </p>
            </div>
          </div>
        </section>

        {/* Fading Overlay (white → transparent) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            opacity: overlayOpacity,
            transition: "opacity 0.2s ease-out",
          }}
        />
      </div>

      {/* SCROLLING CONTENT – APPEARS AFTER FIRST SCREEN */}
      <div className="relative z-20 flex flex-col items-center justify-center md:h-[200vh] h-[120vh] md:space-y-14 space-y-6 px-10 mt-[100vh]">
        <div className="bg-white text-black text-[1.9rem] md:leading-tight leading-none md:text-7xl md:py-12 py-10 px-12 rounded-3xl w-full h-[40vh]">
          <p>
            From Concept to Campaign. <br /> From First Thought to Final Impact.
          </p>
        </div>
        <div className="bg-orange-600 hover:bg-white text-white hover:text-black text-4xl md:text-6xl py-24 px-12 rounded-full text-center w-full">
          Impact Creation – We Make the Trend
        </div>
        <div className="bg-black hover:bg-white text-white hover:text-black text-4xl md:text-6xl py-24 px-12 rounded-full text-center w-full">
          Innovation – Smart Ideas, Real Results
        </div>
        <div className="bg-orange-600 hover:bg-white hover:text-black  text-white text-4xl md:text-6xl py-28 px-12 rounded-full text-center w-full mb-60">
          Public Relations – Shaping Perception
        </div>
      </div>
    </div>
  );
};

export default SectioonLast;
