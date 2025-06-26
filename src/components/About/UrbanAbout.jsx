"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Creative from "./Creative";

const UrbanAbout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scale = Math.max(1 - scrollY / 1000, 0.7); 

  return (
    <section className="relative w-full h-[100vh] bg-white py-10 ">
      {/* Sticky Inner Content */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10">
        {/* Left: Title */}
        <div className="w-full md:w-1/2 text-left mt-40">
          <h1 className="text-6xl md:text-8xl font-telegraf text-black leading-none uppercase tracking-tight">
          About Us
          </h1>
        </div>

        {/* Right: Image and Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
        <div
  className="w-full h-full transition-transform duration-100 ease-in-out"
  style={{
    transform: `scale(${scale})`,
    transformOrigin: "left bottom"
  }}
>

          <div className="relative w-full max-w-xl aspect-[3/2] rounded-xl overflow-hidden shadow-lg ml-0 md:ml-15">
          
          <video
    src="/logo.mp4" // replace with your actual video path
    autoPlay
    muted
    loop
    playsInline
    className="object-cover rounded-2xl w-full h-full "
  />
            </div>
          </div>

          <p className="mt-6 text-2xl md:text-3xl font-serif text-right text-black max-w-3xl  font-telegraf">
         <span className="text-orange-500 "> Urban Chanakya </span> is a <br />  strategy-first, creativity-led brand powerhouse, <br /> delivering impactful outcomes across brand, political, and digital domains.
          </p>
        </div>
      </div>

      {/* Next Component Placeholder */}
      <div className="relative bg-white flex items-center justify-center text-3xl text-black">
        <Creative/>
      </div>
    </section>
  );
};

export default UrbanAbout;
