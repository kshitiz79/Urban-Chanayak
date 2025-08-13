"use client";
import React, { useEffect, useRef, useState } from "react";
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

    const r = Math.round(
      startColor[0] + (endColor[0] - startColor[0]) * localT
    );
    const g = Math.round(
      startColor[1] + (endColor[1] - startColor[1]) * localT
    );
    const b = Math.round(
      startColor[2] + (endColor[2] - startColor[2]) * localT
    );

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
        <section className="px-10 py-34 ">
          <div
            ref={boxRef}
            style={{ backgroundColor }}
            className="transition-colors duration-300 text-center text-white py-8"
          >
            <h1 className="text-6xl mb-20">Area of Expertise</h1>
            <div className="flex md:flex-row gap-6 w-full lg:flex-row flex-col">
              {/* LEFT COLUMN */}
              {/* <div className="w-3/4 flex flex-col gap-6"> */}
              <div className="w-full lg:w-3/4 flex flex-col gap-6">

                {/* Box 1 */}
                <div
                  className={`bg-white rounded-3xl flex flex-col h-3/6  justify-between transition-shadow duration-300 ${shadowClass}`}
                >
                  <div className="flex justify-center">
                    <img src="/lotus.png" className="text-[14rem] h-full w-auto text-black p-8 pt-12" />
                  </div>
                  <p className="text-black text-xl p-4 text-left">
                    <span className="underline text-2xl">
                      {" "}
                      Political Clients
                    </span>
                    <br />
                    We offer 360° Political & Electoral Management, Leadership Branding, Ground Campaign Execution, Field Reports and Intelligence.
                  </p>
                </div>

                {/* Box 2 */}
                <div
                  className={`bg-white rounded-3xl flex flex-col p-6 justify-between h-3/6 justify-between transition-shadow duration-300 ${shadowClass}`}
                >
                  <div className="flex justify-center ">
                    <img
                      src="/pencil.png"
                      alt="Pencil"
                      className="  transition-transform duration-300 hover:translate-x-2"
                    />
                  </div>
                  <p className="text-black text-lg mt-4 text-left">
                    Experience with government projects, designing outdoor branding and exhibitions. Whether it's large-scale outdoor campaigns or curated exhibition designs, Urban Chanakya brings creativity, precision, and strategic thinking to every project, ensuring a lasting impression
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              {/* <div className="w-3/4 flex flex-col items-center gap-6"> */}
              <div className="w-full lg:w-3/4 flex flex-col items-center gap-6">

                {/* Header Box */}
                <div
                  className={`bg-white p-10 w-full rounded-3xl py-14 transition-shadow duration-300 ${shadowClass}`}
                >
                  <h2 className="text-black text-[1.6rem] lg:text-[7.6rem] w-full leading-tight mr-6">
                    urbanchanakya.in
                  </h2>
                  <p className="underline mt-3 text-black text-2xl max-w-5xl text-left">
                    Our Mission
                  </p>
                  <p className="text-black text-2xl max-w-4xl text-left">
                    To craft clear, creative and compelling communication solutions that impact the narrative and resonate with the audience.
                  </p>
                </div>

                {/* Grid Boxes Row */}
                {/* <div className="flex flex-row gap-6 w-full"> */}
                <div className="flex flex-col lg:flex-row gap-6 w-full">

                  {/* Left Sub-Column */}
                  {/* <div className="w-2/3 flex flex-col gap-6"> */}
                  <div className="w-full lg:w-2/3 flex flex-col gap-6">

                    {/* Avatars Box */}
                    <div
                      className={`bg-white p-9 rounded-3xl transition-shadow duration-300 ${shadowClass}`}
                    >
                      <div className="relative overflow-hidden w-full bg-white py-6">
                        <div className="flex w-[200%] animate-marquee-right">
                          {[...Array(2)].flatMap((_, loopIndex) =>
                            [
                              "1",
                              "2",
                              "3",
                              "4",
                              "5",
                              "6",
                              "7",
                              "8",
                              "9",
                              "10",
                              "11",
                              "12",
                              "13",
                              "14",
                              "15",
                            ].map((num, index) => (
                              <img
                                key={`loop-${loopIndex}-${num}-${index}`}
                                src={`./icons/${num}.png`}
                                className="rounded-full h-28 w-28"
                                alt={`Avatar ${num}`}
                              />
                            ))
                          )}
                        </div>
                      </div>

                      <p className="mt-5 text-black font-semibold text-left text-2xl underline">
                        Government Clients :
                      </p>
                      <p className="text-black text-xl mt-2 text-left">
                        We offer Governmental Social Media Management, Public Relations, Branding, Logistics, Stakeholder Engagement.
                      </p>
                    </div>

                    {/* Tags Box */}
                    <div
                      className={`bg-white py-10 px-8 rounded-3xl text-black border-black flex flex-col transition-shadow duration-300 ${shadowClass}`}
                    >
                      <div className="flex flex-wrap justify-start gap-2">
                        {[
                          "Strategic Messaging",
                          "IT/AI Innovation",
                          "Public Relations",

                          "Crisis Management",
                          "Social Media Management",


                        ].map((tag) => (
                          <div
                            key={tag}
                            className="md:px-10 px-10 md:py-4 py-2 border-2 text-2xl rounded-full hover:bg-[#f7680d] hover:border-[#f7680d] hover:text-white transition-all duration-200"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 underline text-2xl text-left">
                        Core Competencies
                      </p>
                      <p className="text-xl text-left">
                        We specialize in crafting out-of-the-box communication strategies designed to create the impact you want.

                      </p>
                    </div>
                  </div>

                  {/* Right Sub-Column */}

                  <div className="w-full lg:w-1/3 bg-white p-6 rounded-3xl flex flex-col items-center justify-between text-center gap-3 transition-shadow duration-300">

                    <img
                      src="/link1.jpeg"
                      alt=""
                      className=" text-black h-auto w-full mr-10 mt-5"
                    />
                    <div>
                      <p className="mt-4 underline text-xl text-black text-left">
                        Driving Impactful Public Communication
                      </p>
                      <p className="text-lg text-black text-left">
                        Creating Impactful Public Communication
                        By merging innovative creativity with strategic messaging, we ensure that every campaign goes beyond just reaching the audience. We focus on crafting messages that resonate deeply, leaving a memorable and lasting impact on the public while driving meaningful engagement.
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
