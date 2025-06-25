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
    <div className="relative w-full h-[300vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* FIRST SECTION WITH WHITE BG INITIALLY */}
      <div
        ref={gateRef}
        className="absolute top-0 left-0 w-full h-[100vh] z-10"
        style={{ backgroundColor: whitePhase ? "transparent" : "white" }}
      >
        {/* Image Card Section */}
        <section className="w-full h-full p-8 px-10 flex items-center">
          <div className="flex flex-col md:flex-row bg-black rounded-2xl overflow-hidden w-full">
            {/* Left Image */}
            <div className="w-full md:w-3/4 relative h-96 md:h-[39rem]">
              <img
                src="/image2.png"
                alt="Visual"
                className="absolute inset-0 w-full h-full cover"
              />
            </div>
            {/* Right Text */}
            <div className="w-full md:w-1/4 p-5 flex items-end">
              <p className="text-gray-50 hover:text-orange-500">
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
      <div className="relative z-20 flex flex-col items-center justify-center h-[200vh] space-y-14 px-10 mt-[100vh]">
        <div className="bg-white text-black text-4xl md:text-7xl py-12 px-12 rounded-3xl w-full h-[40vh]">
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
