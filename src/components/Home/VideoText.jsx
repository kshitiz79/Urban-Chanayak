import React from 'react';

const VideoText = () => {
  return (
    <section className="w-full h-auto  bg-black p-8 px-10 ">

<h1 className='text-black text-center py-5 mb-6 text-6xl font-semibold'>3.7+ Billion Breached</h1>


<div className='flex flex-col md:flex-row items-center md:items-start bg-white rounded-2xl justify-between' >
      {/* Left Text Section */}
<div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-8 p-5">
  <h2 className="text-2xl text-black font-bold mb-4">Our FY 2024-25</h2>
 <p className="text-left text-sm max-w-3xl mx-auto text-gray-900 ">
  FY 2024–25 was a landmark year for Urban Chanakya. With powerful campaigns, creative storytelling, and meaningful outreach, we connected with millions across India and the world. Our ideas reached people through posts, videos, events, and live content, leaving a lasting impact. Thank you for being a part of our journey.
</p>
</div>

      {/* Right Video Section */}
      <div className="w-full md:w-3/4  ">
       <div className="">
  <video
    className="w-full h-[39rem] rounded-r-xl"
    src="/video11.mp4"
    autoPlay
    muted
    loop
    controls
  >
    Your browser does not support the video tag.
  </video>
</div>

      </div>


      </div>
    </section>
  );
};

export default VideoText;
