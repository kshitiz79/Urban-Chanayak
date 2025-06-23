"use client"

import { useEffect, useRef, useState } from 'react';

const Section2 = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="bg-[#fdf5ea] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black mb-2 w-">
            Your brand.<br />
            From the seed of an idea 
          </h2>
          <div className="border-t absolute border-black  mb-12 w-1/3 mt-14 right-60"></div>
        </div>



        <div className="flex justify-center mt-10">
          <img
            ref={imageRef}
            src="/apple.png"
            alt="Two people discussing near a window"
            className={`rounded-xl w-full max-w-3xl transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-80 opacity-0'}`}
          />
        </div>

<div className="flex items-start mt-20 gap-6">


  <div className="w-2/4 mt-7">
    <div className="border-t border-black w-full mb-12"></div>
  </div>



       <div className="w-/4 ">
    <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black text-left mt-7s">
      Your brand is nood now
    
    </h2>
  </div>
        
        </div>


      </div>
    </section>
  );
};

export default Section2;
