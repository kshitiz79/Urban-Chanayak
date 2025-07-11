'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#000000', '#ffffff', '#000000', '#ffffff']
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: background }}
      className="text-white min-h-screen flex flex-col items-center justify-center px-4 py-26 transition-colors duration-1000"
    >
     <div className="text-center mb-12 mt-12">
     <h1 className="text-4xl md:text-[7rem] font-bold leading-none dark:text-white">
  become <span className="relative inline-block">
    <span className="z-10 relative">a part</span>
  </span> of Urban Chanakya family
</h1>

    </div>

      {/* CTA Button */}


      {/* Grid of images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl w-full px-4">
        <img
          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/66cf051312dfedb8cd02c324_item-decor-1.svg"
          alt=""
          className="rounded-tr-[3rem] rounded-bl-[3rem] bg-orange-500"
        />
        <img
          src="/items2.jpg"
          alt=""
          className="rounded-tl-[3rem] rounded-br-[3rem] h-68 w-92 object-cover"
        />
        <img
          src="/items2.jpg"
          alt=""
          className="rounded-tr-[3rem] rounded-bl-[3rem] h-48 w-92 object-cover"
        />
        <img
          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/66cf051bcd6f2a55e70911c0_item-decor-2.svg"
          alt=""
          className="rounded-tr-[3rem] rounded-bl-[3rem] bg-white"
        />
        <img
          src="/items2.jpg"
          alt=""
          className="rounded-tr-[3rem] rounded-bl-[3rem] h-68 w-92 -mt-28 object-cover"
        />
        <img
          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/66cf05247dd2f2d70b3fce60_item-decor-3.svg"
          alt=""
          className="rounded-tr-[3rem] rounded-bl-[3rem] bg-white"
        />
        <img
          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          alt=""
          className="rounded-tr-[3rem] rounded-bl-[3rem] bg-orange-500 h-58 w-92 -mt-18"
        />
        <img
          src="/items2.jpg"
          alt=""
          className="rounded-tl-[3rem] rounded-br-[3rem] h-68 w-92 -mt-28 object-cover"
        />
      </div>
    </motion.section>
  );
}
