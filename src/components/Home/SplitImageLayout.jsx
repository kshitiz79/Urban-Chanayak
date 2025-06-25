"use client";
import React, { useEffect, useRef, useState } from 'react';

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
      <div className="flex mx-auto px-9 py-28">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-black px-4">
          <h1 className="pt-8 text-xl font-semibold text-white">
            <span className="underline">Explore our impactful campaigns</span>, highlighting initiatives <br />
            that make a difference and leave a lasting impression.
          </h1>

          <div className="py-10 flex mx-auto gap-6">
            {/* Right Image - 3/4 width */}
            <div className="w-3/4 h-full">
              <img
                src="/fif.gif"
                alt="Right Image"
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </div>
            {/* Left Image - 1/4 width */}
            <div className="w-1/4 h-full">
              <img
                src="/web.gif"
                alt="Left Image"
                className="w-full h-[70vh] object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Heading to trigger bg change */}
      <h1
        ref={headingRef}
        className="text-6xl text-center text-white font-bold py-24"
      >
        Our diverse projects, from environmental <br />
        initiatives to educational programs
      </h1>
    </div>
  );
};

export default SplitImageLayout;
