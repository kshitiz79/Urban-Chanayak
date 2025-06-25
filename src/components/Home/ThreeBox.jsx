"use client";
import React, { useEffect, useRef, useState } from "react";

const ThreeBox = () => {
  const [scrollFactor, setScrollFactor] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;

      const element = boxRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = 0 - rect.height;

      const progress = 1 - (rect.top - end) / (start - end);
      const clamped = Math.min(Math.max(progress, 0), 1);
      setScrollFactor(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define the 4 color stops as RGB
  const colorStops = [
    [0, 0, 0],           // black
    [0, 0, 0],        // dark gray
    [15, 15, 15],     // medium gray
    [243, 243, 243], 
    [255, 255, 255],    // light gray
  ];
  

  // Interpolate between color stops
  const getInterpolatedColor = (t) => {
    const totalStops = colorStops.length - 1;
    const index = Math.floor(t * totalStops);
    const localT = (t * totalStops) - index;

    const startColor = colorStops[index];
    const endColor = colorStops[Math.min(index + 1, totalStops)];

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * localT);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * localT);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * localT);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const backgroundColor = getInterpolatedColor(scrollFactor);

  return (
    <div
      ref={boxRef}
      style={{ backgroundColor }}
      className="transition-colors duration-300 text-center text-white py-8"
    >
      <div className="flex flex-col items-center px-10 mx-auto space-y-4 mb-8">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 w-full justify-center">
          <div className="bg-white text-black font-normal w-full md:w-[50%] text-4xl py-16 px-10 rounded-2xl">
            Political Leaders & Campaigners
          </div>
          <div className="bg-white text-black font-normal w-full md:w-[50%] text-4xl py-16 px-10 rounded-2xl">
            Government & Public Sector Bodies
          </div>
        </div>
        <div className="bg-white text-black font-normal text-4xl w-full md:w-[100%] py-16 px-10 rounded-2xl mt-2">
          Brands & Businesses Seeking Impact
        </div>
        <p className="text-white text-xl max-w-4xl mx-auto py-10">
          Urban Chanakya empowers changemakers through strategy, creativity, and innovation. From political campaigns to brand launches — we don’t follow trends, we create the impact.
        </p>
      </div>
    </div>
  );
};

export default ThreeBox;
