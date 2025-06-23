import React from 'react';

const Video = () => {
  return (
    <div className="bg-white mx-auto w-full px-4 py-10">
      <div className="rounded-xl overflow-hidden">
    <video
  className="w-[1430px] mx-auto h-[600px] rounded-2xl"
  src="bottom.mp4"
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
