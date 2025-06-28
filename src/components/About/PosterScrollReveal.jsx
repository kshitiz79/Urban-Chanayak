"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollRevealSection = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        card1Ref.current,
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1 },
        { clipPath: "inset(100% 0% 0% 0%)", y: -100, opacity: 0, ease: "power2.inOut" },
        0
      );

      tl.fromTo(
        card2Ref.current,
        { clipPath: "inset(0% 0% 100% 0%)", y: 50, opacity: 0 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, ease: "power2.out" },
        0.2
      );

      tl.to(
        card2Ref.current,
        { clipPath: "inset(100% 0% 0% 0%)", y: -100, opacity: 0, ease: "power2.inOut" },
        0.6
      );

      tl.fromTo(
        card3Ref.current,
        { clipPath: "inset(0% 0% 100% 0%)", y: 50, opacity: 0, scale: 0.95 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, scale: 1, ease: "power2.out" },
        0.65
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] bg-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Card 1 */}
        <div
          ref={card1Ref}
          className="absolute inset-4 md:inset-8 min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center z-30 overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-2xl"
        >
          <div className="text-center px-6 md:px-12">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-6">
              Sucess Stories
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          className="absolute inset-4 md:inset-8 flex items-center justify-center z-20 overflow-hidden rounded-2xl shadow-2xl"
        >
          <div className="inset-4 md:inset-8 absolute flex items-center justify-center overflow-hidden rounded-2xl"
          >
          <div className="bg-black text-white min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] w-full rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1000&fit=crop&crop=face"
                  alt="Emma Hetherington"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Emma
                    <br />
                    <span className="text-gray-300">Hetherington</span>
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md">
                    Creative director and brand strategist with over a decade of experience 
                    crafting memorable digital experiences.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>Portfolio</span>
                    <div className="w-8 h-px bg-gray-600"></div>
                    <span>2024</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          className="absolute inset-4 md:inset-8 flex items-center justify-center z-10 overflow-hidden rounded-2xl shadow-2xl"
        >
          <div className="inset-4 md:inset-8 absolute flex items-center justify-center overflow-hidden rounded-2xl"
          >
          <div className="bg-black text-white min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] w-full rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 lg:order-1">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Kevin's
                    <br />
                    <span className="text-gray-300">Vision</span>
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Kevin is a client's best friend, a straight-talker, a team player, and 
                    once you're on board, your right-hand brand champion. He's got 
                    grown-up experience on both sides of the client/agency fence.
                  </p>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    Kevin founded Allies as he believes Ireland needs a serious 
                    reimagination of the agency experience, for both clients and 
                    creatives. And he'll do whatever it takes to help you rise above the 
                    noise, and put your stamp on the market.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Founder & CEO</span>
                    <div className="w-8 h-px bg-gray-600"></div>
                    <span>Allies Creative</span>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop&crop=face"
                  alt="Kevin - Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealSection;