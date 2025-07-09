'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-26">
      {/* Heading */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl md:text-[7rem] font-bold leading-tight">
          become <span className="relative inline-block">
            <span className="z-10 relative">the one</span>
            <span className="absolute inset-0 border-4 border-red-500 rounded-full scale-110 z-0"></span>
          </span> of Che IT
          <br />
          mates
        </h1>
      </div>

      {/* CTA Button */}
      <button className="border border-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition mb-16">
        See job openings
      </button>

      {/* Grid of images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl w-full px-4">
       
        <img src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/66cf051312dfedb8cd02c324_item-decor-1.svg" alt="" className='rounded-tr-[3rem] rounded-bl-[3rem] bg-orange-500'/>
        <img src="/items2.jpg" alt="" className='rounded-tl-[3rem] rounded-br-[3rem] h-68 w-92 object-cover'/>

        <img src="/items2.jpg" alt="" className='rounded-tr-[3rem] rounded-bl-[3rem] h-48 w-92 object-cover'/>
        <img src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/66cf051bcd6f2a55e70911c0_item-decor-2.svg" alt="" className='rounded-tr-[3rem] rounded-bl-[3rem] bg-white '/>

        <img src="/items2.jpg" alt="" className='rounded-tr-[3rem] rounded-bl-[3rem] h-68 w-92 -mt-28 object-cover'/>
         <img src='https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/66cf05247dd2f2d70b3fce60_item-decor-3.svg' alt="" className='rounded-tr-[3rem] rounded-bl-[3rem] bg-white'/>

        <img src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" alt="" className='rounded-tr-[3rem] rounded-bl-[3rem] bg-orange-500 h-58 w-92 -mt-18'/>
        <img src="/items2.jpg" alt="" className='rounded-tl-[3rem] rounded-br-[3rem] h-68 w-92 -mt-28 object-cover '/>
      </div>
    </section>
  );
}
