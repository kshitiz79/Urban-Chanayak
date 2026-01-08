"use client";
import React, { useEffect, useRef } from "react";

const videoSrc = "/homepage.mp4";

const VideoText3 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — safe fallback
      });
    }
  }, []);

  return (
    <section className="w-full h-auto bg-black py-10 px-4 md:px-10">
      <div className="bg-white rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Text */}
        <div className="w-full md:w-1/4 px-6 py-8 flex flex-col">
          <p className="text-left text-lg font-bold text-black leading-snug">
            Our ambition extends beyond achieving{" "}
            <span className="text-gray-500 hover:text-orange-500 font-bold">
              market dominance for our clients
            </span>
            ; it is about creating a lasting impression. It is not about what we
            can do for you,{" "}
            <span className="text-gray-500 hover:text-orange-500 font-bold">
              but what we can't
            </span>
            .
          </p>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-3/4">
          <video
            ref={videoRef}
            className="w-full aspect-video rounded-r-2xl object-cover block"
            src={videoSrc}
            loop
            muted
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoText3;
