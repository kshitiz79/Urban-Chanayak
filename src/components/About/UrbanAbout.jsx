"use client";
import React, { useEffect, useState } from "react";

const UrbanAbout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Title transforms: shrink font size and stick to top
  const fontSize = Math.max(192 - scrollY / 20, 96); // Font size decreases from 192px to min 96px
  const translateX = Math.min(scrollY / 4, 200); // Retain left movement
  const stickyClass = scrollY > 0 ? "fixed top-0" : "sticky"; // Switch to fixed positioning after scroll

  // Paragraph transform: move up as heading shrinks
  const paraTranslateY = Math.min(scrollY / 2, 100); // Paragraph moves up, max 100px

  return (
    <div className="w-full overflow-hidden">
      {/* Section 1: About Heading and Description */}
      <section className="bg-white h-[80vh] w-full relative z-10 px-6 md:px-16 pt-40">
        <div>
          <h1
            className={`text-[${fontSize}px] font-black font-telegraf text-black uppercase leading-none origin-left ${stickyClass}`}
            style={{
              transform: `translateX(-${translateX}px)`,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              willChange: "transform, font-size",
              transition: "transform 0.1s ease-out, font-size 0.1s ease-out",
            }}
          >
            ABOUT
          </h1>

          <p
            className="mt-20 text-[26px] md:text-[32px] text-black font-black uppercase font-telegraf leading-snug max-w-4xl"
            style={{
              transform: `translateY(-${paraTranslateY}px)`,
              willChange: "transform",
              transition: "transform 0.2s ease-out",
            }}
          >
            <span className="text-orange-500">Urban Chanakya</span> is a strategy-first,
            creativity-led brand powerhouse, delivering impactful outcomes across brand,
            political, and digital domains.
          </p>
        </div>
      </section>

      {/* Section 2: Background Video Fullscreen */}
      <section className="relative w-full h-[150vh] bg-black overflow-hidden">
        <video
          src="/blogvideo2.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
        <p></p>
        <button></button>
      </section>
    </div>
  );
};

export default UrbanAbout;