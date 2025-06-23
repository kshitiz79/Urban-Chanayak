import React from 'react';

const ThreeBox = () => {
  return (
    <div className="bg-black py-16 text-center text-white">
      <h2 className="text-5xl font-bold mb-16">Urban Chanakya is for</h2>
      <div className="flex flex-col items-center px-10 mx-auto space-y-4 mb-8">
        {/* Top row with two boxes */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 w-full justify-center">
          <div className="bg-white text-black font-normal w-full md:w-[50%] text-4xl py-10 px-10 rounded-2xl">
            Political Leaders & Campaigners
          </div>
          <div className="bg-white text-black font-normal w-full md:w-[50%] text-4xl py-10 px-10 rounded-2xl">
            Government & Public Sector Bodies
          </div>
        </div>
        {/* Bottom row with one box */}
        <div className="bg-white text-black font-normal text-4xl w-full md:w-[100%] py-10 px-10 rounded-2xl">
          Brands & Businesses Seeking Impact
        </div>
      </div>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Urban Chanakya empowers changemakers through strategy, creativity, and innovation. From political campaigns to brand launches — we don’t follow trends, we create the impact.
      </p>
    </div>
  );
};

export default ThreeBox;
