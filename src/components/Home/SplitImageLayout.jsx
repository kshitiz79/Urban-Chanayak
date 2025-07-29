"use client";
import React, { useEffect, useRef, useState } from "react";

const SplitImageLayout = () => {
  const headingRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeadingVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the h1 is visible
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`transition-colors duration-500 ease-in-out ${
        isHeadingVisible ? "bg-black" : "bg-white"
      } w-full`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-9 py-16 md:py-28">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black px-4">
          <h1 className="pt-8 text-base sm:text-lg md:text-xl font-semibold text-white">
            <span className="underline">Explore our impactful campaigns</span>, highlighting initiatives <br className="hidden sm:block" />
            that make a difference and leave a lasting impression.
          </h1>

          <div className="py-10 flex flex-col md:flex-row gap-6">
            {/* Right Image - 3/4 width on md+, full width on mobile */}
            <div className="w-full md:w-3/4 h-full">
              <img
                src="/fif.gif"
                alt="Right Image"
                className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            </div>

            {/* Left Image - 1/4 width on md+, full width on mobile */}
            <div className="w-full md:w-1/4 h-full">
              <img
                src="/web.gif"
                alt="Left Image"
                className="w-full h-[60vh] md:h-[70vh] cover rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Heading to trigger bg change */}
      <h1
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-6xl text-center text-white font-bold py-16 md:py-24 px-4"
      >
        Our diverse projects, from environmental <br className="hidden md:block" />
        initiatives to educational programs
      </h1>
    </div>
  );
};

export default SplitImageLayout;
