"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  "Impact Creation – We Make the Trend, Others Follow",
  "Innovation – Using Intelligence to Create the Impact",
  "Crisis Management – Clarity in Chaos, Creativity in Crisis",
  "Public Relations – Shaping Perception, Building Trust",
  "Strategic Messaging – Making Every Word Count",
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CoreCompetencies = () => {
  return (
    <div className="relative bg-white min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2">
        {/* Left Half (Empty) */}
        <div></div>

        {/* Right Half (Animated Content) */}
        <div className="p-10">
          <p className="text-[2rem] leading-snug mb-6 text-black">
            Our Core Competencies - <br />Concept to Campaign. First Thought to Final Impact
          </p>
          <div className="rounded-xl space-y-6 mt-50">
            {items.map((text, index) => (
              <motion.p
                key={index}
                className="bg-orange-500 p-8 rounded-xl text-white text-[1.2rem]"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={itemVariants}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
