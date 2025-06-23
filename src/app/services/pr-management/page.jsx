import Section2 from '@/components/Service/Section2';
import Section5 from '@/components/Service/Service5';
import React from 'react';

const Section1 = () => (
  <section className="bg-[#fdf5ea] py-16 px-6">
    <div className="max-w-7xl mx-auto text-right  pt-6 flex justify-between items-center">
      
    </div>




    <div className="bg-black text-white text-center mt-12 py-24 rounded-xl">
      <h2 className="text-6xl md:text-8xl font-serif leading-snug">
        Every step of <br />
        <span className="underline decoration-red-500">the creative journey</span>
      </h2>
    </div>
  </section>
);


const Section3 = () => (
  <section className="relative bg-black min-h-screen">
    <img
      src="/download-1.jpg" // Replace with actual image path
      alt="Book and laptop setup"
      className="absolute inset-0 w-full h-full object-cover "
    />


    <div className="absolute bottom-0 left-0 z-10 max-w-6xl py-24 px-6">
  <div className="bg-[#c2b4a6] p-8 px-20 pr-32 py-20 rounded-xl max-w-6xl">
    <p className="text-xl uppercase tracking-widest text-gray-700 mb-2">
      Services
    </p>
    <h2 className="text-7xl font-serif uppercase text-white leading-snug">
PR Management
    </h2>
  </div>
</div>

  </section>
);

const Sections = () => {
  return (
    <>
          <Section3 />

      <Section2 />
            <Section1 />
            <Section5/>

    </>
  );
};

export default Sections;
