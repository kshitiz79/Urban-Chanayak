"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

const boxes = [
  "Impact Creation – We Make the Trend, Others Follow ",
  "Innovation – Using Intelligence to Create the Impact",
  "Crisis Management – Clarity in Chaos, Creativity in Crisis ",
  "Public Relations – Shaping Perception, Building Trust",
  "Strategic Messaging – Making Every Word Count",
];

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export default function TeamSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-12 bg-gray-100">
      {/* Left Side - Image */}
      <div className="w-full md:w-[35%] sticky top-24 self-start">
        <Image
          src="/ghoda.png"
          alt="Team Visual"
          width={500}
          height={400}
          className="rounded-xl object-cover h-[80vh]"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-[65%] mt-12 md:mt-0">
        {/* Heading Section */}
        <div className="max-w-xl ml-auto mb-50 py-20">
          <h2 className="text-4xl text-black">
            Our Core Competencies
            <br />
            Concept to Campaign. First
            <br />
            Thought to Final Impact
          </h2>
        </div>

        {/* Individual Scroll-triggered Boxes */}
        <div className="space-y-8 max-w-3xl ml-auto">
          {boxes.map((text, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              margin: "0px 0px -200px 0px",
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="bg-orange-500 p-9 rounded-md shadow-md text-white font-semibold text-xl"
                variants={boxVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {text}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
