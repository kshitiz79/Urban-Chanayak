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
    ['#ffffff', '#000000', '#ffffff', '#000000']
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: background }}
      className="text-white min-h-screen flex flex-col items-center justify-center px-4 py-26 transition-colors duration-1000"
    >
     <div className="text-center mb-12 mt-12">
      <h1 className="text-4xl md:text-[7rem] font-bold leading-tight text-black dark:text-white">
        become{' '}
        <span className="relative inline-block">
          {/* Actual Text */}
          <span className="z-10 relative">the one</span>

          {/* Hand-drawn Ribbon Animation */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1, // 1s delay before animation starts
              ease: 'easeInOut',
            }}
            className="absolute inset-0 z-0 w-full h-full scale-125"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="
                M 10,50
                Q 10,10 50,10
                Q 90,10 90,50
                Q 90,90 50,90
                Q 10,90 10,50
              "
              fill="none"
              stroke="#ef4444"  // Tailwind red-500
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </span>{' '}
        of Urban Chanakyas
        <br />
        family
      </h1>
    </div>

      {/* CTA Button */}
      <button className="border text-black border-orange-500 hover:text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition mb-16">
        See job openings
      </button>

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
