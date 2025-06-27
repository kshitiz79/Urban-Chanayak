"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PosterScrollReveal = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // tighter scroll range
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        card1Ref.current,
        { clipPath: "inset(0% 0% 0% 0%)" },
        { clipPath: "inset(100% 0% 0% 0%)", ease: "power2.inOut" },
        0
      );

      tl.fromTo(
        card2Ref.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
        0.03 // closer to card 1
      );

      tl.to(
        card2Ref.current,
        { clipPath: "inset(100% 0% 0% 0%)", ease: "power2.inOut" },
        0.32
      );

      tl.fromTo(
        card3Ref.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut" },
        0.33// very minimal gap
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-white overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Card 1 */}
        <div
          ref={card1Ref}
          className="absolute inset-0 min-h-screen flex items-center justify-center z-30 overflow-hidden rounded-xl"
        >
          <div className="bg-white text-black min-h-screen w-full max-w-7xl rounded-xl px-10 flex items-center justify-center overflow-hidden">
            <h1 className="text-[7rem]">Success Stories</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden rounded-xl"
        >
          <div className="bg-black text-white min-h-screen w-full max-w-7xl rounded-xl px-10 py-20 grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
            <div className="flex justify-center">
              <Image
                src="/download-2.jpg"
                alt="Second"
                width={800}
                height={800}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">We Think Differently</h2>
              <p className="text-lg text-gray-300">
                We bring clarity and courage to brands by reshaping what’s possible through design.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden rounded-xl"
        >
          <div className="bg-black text-white  min-h-screen w-full max-w-7xl rounded-xl px-10 py-20 grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
            <div className="flex justify-center">
              <Image
                src="/download-1.jpg"
                alt="Third"
                width={500}
                height={500}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">We Inspire Boldly</h2>
              <p className="text-lg text-gray-300">
                Our team challenges conventions and redefines excellence with every project we take on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterScrollReveal;
