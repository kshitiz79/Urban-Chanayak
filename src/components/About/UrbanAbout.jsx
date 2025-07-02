"use client";
import React, { useEffect, useState } from "react";

const UrbanAbout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Title transforms: shrink font size and move left
  const fontSize = Math.max(192 - scrollY / 20, 96); // Font size decreases from 192px to min 96px
  const translateX = Math.min(scrollY / 2, 300); // Left movement, max 300px

  // Paragraph transform: move up
  const paraTranslateY = Math.min(scrollY / 2, 100); // Paragraph moves up, max 100px

  return (
    <div className="w-full overflow-hidden ">
      {/* Section 1: About Heading and Description */}
      <section className="bg-white h-[80vh] w-full relative z-10 pt-40">
        <div>
          <h1
            className="text-[192px] font-black font-telegraf text-black uppercase leading-none origin-left"
            style={{
              fontSize: `${fontSize}px`,
              transform: `translateX(-${translateX}px)`,
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
        
      </section>
      <section className="bg-white pt-20 px-6 ">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
    {/* Left side: Paragraph */}
    <p className="text-base md:text-4xl max-w-3xl font-semibold font-telegraf text-black md:w-2/3">
    Over the past five years, we’ve delivered impactful outcomes for a distinguished clientele — not by following convention,<br />  but by rewriting the playbook
    </p>

    {/* Right side: Button */}
    <div className="md:w-1/3 flex md:justify-center">
      <button className="bg-black hover:bg-orange-500 text-white px-6 py-2 text-sm md:text-base rounded-full uppercase font-bold">
        Let’s Work Together
      </button>
    </div>
  </div>
</section>

    </div>
  );
};

export default UrbanAbout;