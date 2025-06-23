import React from 'react';

const SectioonLast = () => {
  return (
    <div className="relative w-full h-[200vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bottom2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>




      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-10 px-10 ">




           <div className="bg-white relative text-black text-4xl md:text-7xl py-12  px-12  rounded-3xl text-start w-full ">
                   <p>From Concept to Campaign. <br /> From First Thought to Final Impact.</p>
        </div>



        <div className="bg-black text-white text-4xl md:text-6xl  py-24 px-12 rounded-full text-center w-full ">
               Impact Creation – We Make the Trend
        </div>


        <div className="bg-orange-600  text-white text-4xl md:text-6xl  py-24 px-12 rounded-full text-center w-full">
        Innovation – Smart Ideas, Real Results
        </div>

             <div className="bg-black text-white text-4xl md:text-5xl  py-28 px-12 rounded-full text-center w-full  ">
               Public Relations - Shaping Perception , Building Trust
   
        </div>

 
      </div>
    </div>
  );
};

export default SectioonLast;
