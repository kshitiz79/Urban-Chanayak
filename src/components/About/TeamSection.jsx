


"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  "Impact Creation – We Make the Trend, Others Follow",
  "Innovation – Using Intelligence to Create the Impact",
  "Crisis Management – Clarity in Chaos, Creativity in Crisis",
  "Public Relations – Shaping Perception, Building Trust",
  "Strategic Messaging – Making Every Word Count",
  'Technology & Software – Digital Solutions for Political Innovation & Smarter Governance',
];

// Define animation variants for the items
const itemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9, 
    y: 60 
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 2.0,
      ease: [0.6, -0.05, 0.01, 0.9],
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeIn",
    },
  },
};


const TeamSection = () => {
  return (
    <div  className="relative bg-white min-h-screen flex items-center py-10">
      <div  className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 px-4 md:px-10 py-20 gap-10">
        
        {/* Left Half (Less than 50%) */}
        <div className="hidden md:block md:col-span-2 items-center ">
          <img src="/ghoda.png" alt="" className="mt-80 -ml-20"/>
        </div>

        {/* Right Half (More than 50%) */}
        <div className="md:col-span-3">
          <motion.p
            className="text-[2.5rem] leading-snug mb-6 text-black drop-shadow-[1px_1px_0_black]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Our Core Competencies - <br />
            Concept to Campaign. First Thought to Final Impact
          </motion.p>

          <div className="rounded-xl space-y-4 mt-40">
            {items.map((text, index) => (
             <motion.div
             key={index}
             className="bg-orange-500 hover:bg-[#182d3b] p-8 shadow-lg rounded-lg"
             variants={itemVariants}
             initial="hidden"
             whileInView="show"
             exit="exit"
             viewport={{
               once: false,
               amount: 0.9,
             }}
           >


<motion.p
className="text-2xl text-white"
  initial={{ opacity: 0, x: -50 }} // Start 100px to the left and invisible
  whileInView={{ opacity: 1, x: 0.5 }} // Animate to original position and visible
  exit={{ opacity: 0, x: 100 }} // (Optional) Animate out to the right
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.5 }}
>
  {text}
</motion.p>
              
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamSection;