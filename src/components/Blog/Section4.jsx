"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Section4 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current.textContent;
    textRef.current.innerHTML = text
      .split(" ")
      .map((char) => `<span class="text-gray-500 inline-block">${char}</span>`)
      .join(" ");

    const spans = textRef.current.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { color: "#6b7280" },
        {
          color: "#000000",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-smooth bg-white">
      <div className="bg-white max-w-6xl px-4 sm:px-10 md:px-20 pb-10 mx-auto">
        <p ref={textRef} className="text-2xl sm:text-3xl md:text-4xl text-black">
          <span className="underline text-orange-500">
            Bodoland CEM Cup 2025: How Urban Chanakya Turned a Regional Tournament into Northeast India’s Loudest Roar to the Prime Minister Narendra Modi
          </span>
        </p>
      </div>

      <div className="w-full">
        <img src="/blognew2.png" alt="jj" className="w-full h-auto" />
      </div>

      <div className="text-black text-base sm:text-lg md:text-xl mt-12 px-4 sm:px-10 md:ml-80 md:mr-40">
        <p>
          The first-ever Bodoland CEM Cup 2025 wasn’t just a football tournament – it was a movement...
        </p>
        <br />
        <p className="mb-4">The campaign began with a clear vision...</p>
        <p className="mb-4">From design decks to final deliverables...</p>
        <p>On digital platforms, the campaign came alive...</p>
        <br />
        <p className="mb-4">Such was the impact of Urban Chanakya’s powerful storytelling...</p>
        <p className="mb-4">Then came the Grand Finale on 15th July at SAI Stadium...</p>
        <p>As the sun set, fireworks lit up the Kokrajhar sky...</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mt-12">
          <img src="/bloglast.png" alt="fghjk" className="w-full h-auto" />
          <p className="p-4 text-gray-500">
            Our Guwahati, Our Responsibility. – Urban Chanakya and GMC
          </p>
        </div>

        <div className="text-black py-16 px-4 sm:px-6 md:ml-80">
          <h1 className="text-2xl sm:text-3xl md:text-[30px] font-semibold">
            Our Guwahati, Our Responsibility. – Urban Chanakya and GMC
          </h1>
          <br />
          <p className="text-base sm:text-lg md:text-xl">
            In July 2024, Urban Chanakya partnered with Guwahati Municipal Corporation (GMC)...
          </p>
          <br />
          <p className="text-base sm:text-lg md:text-xl">
            Within just one year, Guwahati soared from Rank 402 to Rank 44...
          </p>
          <p>✅ Cleanest City in the North East</p>
          <p>✅ Promising City Award (East Zone)</p>
          <br />
          <p className="text-base sm:text-lg md:text-xl">
            At the heart of this success was a year-long digital storytelling strategy...
          </p>
          <br />
          <p className="text-base sm:text-lg md:text-xl">
            Each campaign turned routine municipal work...
          </p>
          <br />
          <p className="text-base sm:text-lg md:text-xl">
            From reels and infographics to live coverage...
          </p>
          <br />
          <p className="text-base sm:text-lg md:text-xl">
            Guwahati’s transformation is not just about better sanitation...
          </p>
          <br />
          <p className="text-base sm:text-lg md:text-xl">
            From 402 to 44. From overlooked to awarded...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
