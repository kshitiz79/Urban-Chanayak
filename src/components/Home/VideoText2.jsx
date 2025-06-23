import React from 'react';

const VideoText2 = () => {
  return (
    <>
    <section className="w-full h-auto bg-white p-8 px-10">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-black rounded-2xl justify-between">
        
        {/* Left Image Section */}
        <div className="w-full md:w-3/4">
          <img src="./download-2.jpg" className="w-full rounded-2xl" alt="Visual" />
        </div>

        {/* Right Text Section - Positioned at Bottom */}
        <div className="w-full md:w-1/4 p-5 md:pr-8 mt-[30rem] flex flex-col justify-end h-full">
          <div>

            <p className='text-white'>
              At Urban Chanakya, we combine visuals, motion, and messaging to shape narratives that engage, influence, and drive results. 
            </p>
          </div>
        </div>

      </div>
    </section>



 <section className="w-full h-auto bg-white p-8 px-10">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-black rounded-2xl justify-between">
        
        {/* Left Image Section */}
        <div className="w-full md:w-3/4">
          <img src="./download-2.jpg" className="w-full rounded-2xl" alt="Visual" />
        </div>

        {/* Right Text Section - Positioned at Bottom */}
        <div className="w-full md:w-1/4 p-5 md:pr-8 mt-[32rem] flex flex-col justify-end h-full">
          <div>

            <p className="text-gray-50">
            
              From campaign reels to interactive content — every frame tells your story with impact.
            
            </p>
          </div>
        </div>

      </div>
    </section>

    </>
  );
};

export default VideoText2;
