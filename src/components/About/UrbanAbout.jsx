"use client";

import React, { useEffect, useRef, useState } from "react";

const UrbanAbout = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    // Detect if screen is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Tailwind's 'sm' breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll-based calculations
  const fontSize = isMobile
    ? Math.max(scrollY < 300 ? 100 - scrollY / 1 : 26, 46)
    : Math.max(scrollY < 300 ? 182 - scrollY / 1 : 26, 96);
  const translateX = Math.min(scrollY / 38, 96);
  const paraTranslateY = Math.min(scrollY / 2, 300);

  return (
    <div className="relative w-full overflow-hidden scroll-smooth">
      {/* Section 1: Heading */}
      <section className="bg-white md:h-[80vh] h-[60vh] w-full relative z-10 pt-32 sm:pt-40 px-6 sm:px-10">
        <div>
          <h1
            className="font-black font-telegraf text-black uppercase leading-none origin-left"
            style={{
              fontSize: `${fontSize}px`,
              transform: `translateX(-${translateX}px)`,
              willChange: "transform, font-size",
              transition: "transform 0.2s ease-out, font-size 0.1s ease-out",
            }}
          >
            ABOUT
          </h1>

          <p
            className="mt-16 text-[22px] sm:text-[32px] text-black font-black uppercase font-telegraf leading-snug max-w-4xl pl-2 sm:pl-4"
            style={{
              transform: `translateY(-${paraTranslateY}px)`,
              willChange: "transform",
              transition: "transform 0.2s ease-out",
            }}
          >
            <span className="text-orange-500">Urban Chanakya</span>  IS A STRATEGY-FIRST, CREATIVITY-LED BRAND POWERHOUSE, DELIVERING IMPACTFUL OUTCOMES ACROSS BRANDS IN POLITICS, PUBLIC SECTOR, GOVERNMENT AND CORPORATE DOMAINS.
          </p>
        </div>
      </section>


      {/* Section 2: Background Video */}
    <section className="relative md:w-full  md:h-[130vh] w-auto h-[60vh] bg-black overflow-hidden z-10">
        <video
          src="/about-replace.webm"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
      </section>


      {/* Section 3: Text + Button */}
      <section className="bg-white pt-20 px-6 sm:px-10 z-10 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <p className="text-base sm:text-lg md:text-4xl max-w-3xl font-semibold font-telegraf text-black md:w-2/3">
            Over the past five years, we’ve delivered impactful outcomes for a distinguished clientele — not by following convention,
            <br className="hidden sm:block" /> but by rewriting the playbook
          </p>

          <div className="md:w-1/3 flex md:justify-center pb-8 md:pb-0">
            <button className="bg-black hover:bg-orange-500 text-white px-6 py-2 text-sm md:text-base rounded-full uppercase font-bold w-full md:w-auto">
              Let’s Work Together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UrbanAbout;
