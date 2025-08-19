import React from "react";
// Option A (recommended): import the asset so the bundler fingerprints it
// Put FinalCut.mp4 in src/assets (or similar) and import:
// import videoSrc from "./../../../public/FinalCut.mp4";

// Option B (static public path):
// - Vite/Next.js/CRA: place FinalCut.mp4 in /public and use: const videoSrc = "/FinalCut.mp4";
const videoSrc = "/FinalCut.mp4";

const Video = () => {
  return (
    <div className="bg-white w-full md:px-9 md:py-10  px-2 py-6 ">
      {/* Avoid h-full; enforce a visible box via aspect ratio */}
      <div className="rounded-xl overflow-hidden w-full  shadow-lg ">
      <div className="rounded-xl overflow-hidden w-full shadow-lg ">
        <video
          className="block w-full h-auto"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
