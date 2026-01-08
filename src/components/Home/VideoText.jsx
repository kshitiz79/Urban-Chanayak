"use client";
import React, { useEffect, useRef } from "react";

const VideoText = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // autoplay blocked — ignore safely
      });
    }
  }, []);

  return (
    <section className="w-full h-auto bg-white py-10 px-4 md:px-10">
      <h1 className="text-black text-center text-6xl font-semibold mb-6">
        3.7+ Billion Breached
      </h1>

      <div className="bg-[#01141e] rounded-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/4 px-6 py-8 flex flex-col">
          <h2 className="text-2xl text-white font-bold mb-4">
            Our FY 2024–25
          </h2>
          <p className="text-sm text-white">
            FY 2024–25 was a landmark year for Urban Chanakya. With powerful
            campaigns, creative storytelling, and meaningful outreach, we
            connected with millions across India and the world.
          </p>
        </div>

        <div className="w-full md:w-3/4">
          <video
            ref={videoRef}
            className="w-full aspect-video rounded-r-2xl object-cover block"
            src="/June.mp4"
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoText;
