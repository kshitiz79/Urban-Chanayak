import React from 'react';

const VideoText = () => {
  return (
    <section className="w-full h-auto bg-white py-10 px-4 md:px-10">
      <h1 className="text-black text-center text-6xl font-semibold mb-6">
        3.7+ Billion Breached
      </h1>

      <div className="bg-black rounded-2xl flex flex-col md:flex-row md:items-stretch overflow-hidden">
        {/* Left Text Section */}
        <div className="w-full md:w-1/4 px-6 py-8 flex flex-col">
          <h2 className="text-2xl text-white font-bold mb-4">Our FY 2024-25</h2>
          <p className="text-left text-sm text-white">
            FY 2024–25 was a landmark year for Urban Chanakya. With powerful campaigns, creative storytelling, and meaningful outreach, we connected with millions across India and the world. Our ideas reached people through posts, videos, events, and live content, leaving a lasting impact. Thank you for being a part of our journey.
          </p>
        </div>

        {/* Right Video Section */}
        <div className="w-full md:w-3/4 h-auto m-0 p-0">
          <video
            className="w-full h-full aspect-video rounded-r-2xl object-cover block"
            src="/June.mp4"
            autoPlay
            muted
            loop
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoText;
