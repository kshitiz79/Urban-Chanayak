"use client";
import React, { useEffect, useState } from "react";

const SuccessStories = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeOpacity = (start, end) => {
    const progress = (scrollY - start) / (end - start);
    return Math.min(Math.max(progress, 0), 1);
  };

  return (
    <section className="relative w-full h-[300vh] bg-white">
      {/* Title Screen */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10 bg-white">
        <h1 className="text-black text-center text-6xl md:text-8xl font-bold">
          Success Stories
        </h1>
      </div>

      {/* Panel 1: slides in from top as you scroll */}
      <div className="h-screen relative z-20">
        <div
          className="sticky bottom-0 h-screen flex items-center justify-center bg-black text-white"
          style={{
            opacity: fadeOpacity(200, 600),
            transform: `translateY(${fadeOpacity(200, 600) * 0}px)`,
          }}
        >
          <div className="">
            <div className="w-[1/2]">
            <img src="/contact.jpg" alt="logo" className="w-24 h-24 mb-4" />
            </div> 
            <div className="w-[1/2]">
            <h2 className="text-4xl font-bold mb-2">Hello Manu</h2>
            <p className="text-lg">lorem</p>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 2 */}
      <div className="h-screen relative z-30">
        <div
          className="sticky top-0 h-screen flex items-center justify-center bg-black text-white"
          style={{
            opacity: fadeOpacity(800, 1200),
            transform: `translateY(${(1 - fadeOpacity(200, 600)) * -100}px)`,

          }}
        >
          <div className="text-center">
            <img src="/contact.jpg" alt="logo" className="mx-auto w-24 h-24 mb-4 items-left" />
            <h2 className="text-4xl font-bold mb-2">Still Manu</h2>
            <p className="text-lg">More lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
