import React from 'react';

const SplitImageLayout = () => {
  return (
    <div className=" bg-black flex overflow-hidden">

      <div className=' py-10 flex mx-auto gap-6'>
      {/* Left Image - 1/4 width */}
  
      {/* Right Image - 3/4 width */}
      <div className="w-3/4 h-full">
        <img
          src="/fif.gif" // Replace with your image path
          alt="Right Image"
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>
    <div className="w-1/4 h-full">
        <img
          src="/web.gif" // Replace with your image path
          alt="Left Image"
          className="w-full h-full object-cover rounded-r-2xl"
        />
      </div>

      </div>
    </div>
  );
};

export default SplitImageLayout;
