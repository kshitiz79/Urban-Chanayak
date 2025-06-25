import React from 'react';

const Video = () => {
  return (
    <div className="bg-white w-full h-[600px] px-6 py-10">
      <div className="rounded-xl overflow-hidden h-full w-full max-w-[2830px] mx-auto shadow-lg">
        <video
          className="w-full h-full object-cover rounded-2xl mb-"
          src="finalCut.mp4"
          controls
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
