import React from 'react'

const VideoText4 = () => {
  return (
    
    <section className="w-full bg-white p-8 px-10">
    <div className="flex flex-col md:flex-row bg-black rounded-2xl overflow-hidden">
      
      {/* Left Image Section */}
      <div className="w-full md:w-3/4 h-96 md:h-[39rem] relative">
        <img
          src="./image2.png"
          alt="Visual"
          className="absolute inset-0 w-full h-full cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/4 p-5 flex items-end">
        <p className="text-gray-50">
          From campaign reels to interactive content — every frame tells your story with impact.
        </p>
      </div>

    </div>
  </section>
  )
}

export default VideoText4