"use client";
import React, { useEffect, useRef } from "react";

const videoSrc = "/FinalCut.mp4";

const Video = () => {
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
    <div className="bg-white w-full md:px-9 md:py-10 px-2 py-6">
      <div className="rounded-xl overflow-hidden w-full shadow-lg">
        <video
          ref={videoRef}
          className="block w-full h-auto"
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
  );
};

export default Video;
