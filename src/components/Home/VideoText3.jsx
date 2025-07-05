import React from 'react';

const VideoText3 = () => {
  return (
    <section className="w-full h-auto bg-black py-10 px-4 md:px-10">
      {/* <h1 className="text-white text-center text-6xl font-semibold mb-6">
        3.7+ Billion Breached
      </h1> */}

      <div className="bg-white rounded-2xl flex flex-col md:flex-row md:items-stretch overflow-hidden">
        {/* Left Text Section */}
        <div className="w-full md:w-1/4 px-6 py-8 flex flex-col">

          <p className="text-left text-lg text-black leading-snug">
          Our ambition extends beyond achieving <span className='text-gray-500 hover:text-orange-500'> market dominance for our clients</span>; it is about creating a lasting impression. It is not about what we can do for you, <span className='text-gray-500 hover:text-orange-500'> but what we can't</span>.
          </p>
        </div>

        {/* Right Video Section */}
        <div className="w-full md:w-3/4 h-auto m-0 p-0">
          <video
            className="w-full h-full aspect-video rounded-r-2xl object-cover block"
            src="/homepage.mp4"
            autoPlay
            muted
            loop
         
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoText3;
