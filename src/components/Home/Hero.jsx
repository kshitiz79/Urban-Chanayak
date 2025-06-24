








"use client"
import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = 1;

      if (currentY - lastScrollY.current > delta) {

        setVisible(false);
      } else if (lastScrollY.current - currentY > delta) {
      
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[130vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute -top-8 left-0 w-full h-[150vh] object-cover"
        src="/videoblog2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex justify-center items-center h-full text-center">
        <div
          className="w- h-[50vh] rounded-[6rem] px-60 flex justify-center items-center bg-white"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.25s ease-in-out',
          }}
        >
          <h1 className="text-8xl text-black font-normal font-sans text-center">
            We Create The <br /> Impact
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
