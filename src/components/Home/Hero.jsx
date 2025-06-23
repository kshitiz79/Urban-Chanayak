

import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videoblog2.mp4" // Replace with your video path
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex justify-center items-center h-full text-center">
       <div className="bg-white bg-opacity-90 p-10 w- h-[50vh] rounded-[6rem] px-60  flex justify-center items-center">
        <h1 className="text-8xl text-black  font-normal font-sans text-center">We Create The <br/> Impact</h1>
      </div>
      </div>

    </div>
  );
};

export default Hero;

