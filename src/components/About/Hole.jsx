import React from 'react';

const Hole = () => {
  return (
    <section className="relative h-[200vh] bg-white w-full">
      {/* Fixed, pixelated background */}
      <div className="bg-white fixed z-20 w-full h-full">
        <p className="text-black text-9xl absolute top-10 left-10 z-10">fghjkl;'</p>
        <img src="/cover.png" alt="Hole Background" className="w-full h-full object-cover" />
      </div>

      {/* Mask overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="square-hole">
              <rect width="100%" height="100%" fill="white" />
              <rect
                x="30%"
                y="50%"
                width="1200"
                height="720"
                fill="black"
                transform="translate(-310 -310)"
              />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="#c2410c"
            mask="url(#square-hole)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hole;
