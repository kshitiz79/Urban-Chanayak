"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidLockOpen } from "react-icons/bi";
import VideoText2 from "./VideoText2";

const ManyDivs = () => {
  const [scrollFactor, setScrollFactor] = useState(0);
  const [isNextVisible, setIsNextVisible] = useState(false);

  const boxRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;

      const rect = boxRef.current.getBoundingClientRect();
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

  // Intersection Observer to detect if next section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNextVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (nextSectionRef.current) observer.observe(nextSectionRef.current);
    return () => {
      if (nextSectionRef.current) observer.unobserve(nextSectionRef.current);
    };
  }, []);

  const colorStops = [
    [0, 0, 0],
    [0, 0, 0],
    [30, 20, 20],
    [200, 200, 200],
    [255, 255, 255],
  ];

  const getInterpolatedColor = (t) => {
    const totalStops = colorStops.length - 1;
    const index = Math.floor(t * totalStops);
    const localT = t * totalStops - index;

    const startColor = colorStops[index];
    const endColor = colorStops[Math.min(index + 1, totalStops)];

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * localT);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * localT);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * localT);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const backgroundColor = isNextVisible
    ? "rgb(255,255,255)"
    : getInterpolatedColor(scrollFactor);

  const shadowClass = isNextVisible ? "shadow-2xl" : "";

  return (
    <>
      <div
        ref={boxRef}
        style={{ backgroundColor }}
        className="transition-colors duration-300 text-center text-white py-8"
      >
        <section className="px-10 py-34">
        <div
        ref={boxRef}
        style={{ backgroundColor }}
        className="transition-colors duration-300 text-center text-white py-8"
      >

        <h1 className="text-6xl mb-20">Area of Expertise</h1>
          <div className="flex flex-row gap-6 w-full">
            {/* LEFT COLUMN */}
            <div className="w-3/4 flex flex-col gap-6">
              {/* Box 1 */}
              <div
                className={`bg-white rounded-3xl flex flex-col h-full justify-between transition-shadow duration-300 ${shadowClass}`}
              >
                <div className="flex justify-center">
                  <BiSolidLockOpen className="text-[14rem] h-full w-auto text-black" />
                </div>
                <p className="text-black text-lg p-4 text-left">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              {/* Box 2 */}
              <div
                className={`bg-white rounded-3xl flex flex-col p-6 justify-between transition-shadow duration-300 ${shadowClass}`}
              >
                <div className="flex justify-center ">
                  <img
                    src="/pencil.png"
                    alt="Pencil"
                    className="h-full scale-x-[-1] transition-transform duration-300 hover:translate-x-2"
                  />
                </div>
                <p className="text-black text-lg mt-4 text-left">
                  <span className="underline">Lorem ipsum dolor sit amet Lorem ipsum</span><br />
                  dolor sit amet consectetur. Nihil reprehenderit nemo culpa est eos cupiditate.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-3/4 flex flex-col items-center gap-6">
              {/* Header Box */}
              <div
                className={`bg-white p-10 w-full rounded-3xl py-14 transition-shadow duration-300 ${shadowClass}`}
              >
                <h2 className="text-black text-[5rem] sm:text-[7.6rem] w-full leading-tight mr-6">
                  urbanchanakya.in
                </h2>
                <p className="underline mt-3 text-black text-lg max-w-5xl text-left">
                  hshjxbdd dndm dwm
                </p>
                <p className="text-black text-lg max-w-4xl text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero
                  tempore praesentium mollitia saepe error cupiditate dolorum eaque nobis. Vitae est
                  non, atque magnam voluptas sint.
                </p>
              </div>

              {/* Grid Boxes Row */}
              <div className="flex flex-row gap-6 w-full">
                {/* Left Sub-Column */}
                <div className="w-2/3 flex flex-col gap-6">
                  {/* Avatars Box */}
                  <div
                    className={`bg-white p-9 rounded-3xl transition-shadow duration-300 ${shadowClass}`}
                  >
                    <div className="flex flex-wrap justify-center">
                      {["1", "2", "3", "4", "5"].map((num) => (
                        <img
                          key={num}
                          src={`./Frame${num}.png`}
                          className="rounded-full h-28 w-28"
                          alt={`Avatar ${num}`}
                        />
                      ))}
                    </div>
                    <p className="mt-5 text-black font-semibold text-left">dfghjkl;kjhgfdghjkl;</p>
                    <p className="text-black text-lg mt-2 text-left">
                      Readymag offers a full library of flexible presentation dummies, all available for free.
                    </p>
                  </div>

                  {/* Tags Box */}
                  <div
                    className={`bg-white py-10 px-8 rounded-3xl text-black border-black flex flex-col transition-shadow duration-300 ${shadowClass}`}
                  >
                    <div className="flex flex-wrap justify-start">
                      {["Presentation", "Landing Page", "Editorial", "Portfolio", "E-Commerce"].map((tag) => (
                        <div
                          key={tag}
                          className="px-9 py-4 border-4 text-2xl rounded-full hover:bg-[#f7680d] hover:border-[#f7680d] hover:text-white transition-all duration-200"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 underline text-xl text-left">
                      Use templates or create your own
                    </p>
                    <p className="text-lg text-left">
                      Readymag offers a full library of flexible presentation dummies, all available for free.
                    </p>
                  </div>
                </div>

                {/* Right Sub-Column */}
                <div
                  className={`w-1/3 bg-white p-6 rounded-3xl flex flex-col items-center justify-between text-center gap-3 transition-shadow duration-300 ${shadowClass}`}
                >
                  <img
                    src="/link.png"
                    alt=""
                    className="scale-x-[-1] text-black h-auto w-full mt-10"
                  />
                  <div>
                    <p className="mt-4 underline text-xl text-black text-left">
                      Use templates or create your own
                    </p>
                    <p className="text-lg text-black text-left">
                      Readymag offers a full library of flexible presentation dummies, all available for free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>

      {/* Next Section Trigger */}
      <section ref={nextSectionRef}>
        <VideoText2 />
      </section>
    </>
  );
};

export default ManyDivs;
