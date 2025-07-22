


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

// Define animation variants for the items
const itemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 60 
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 6.0,
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
      duration: 0.5,
      ease: "easeIn",
    },
  },
};


const CoreCompetencies = () => {
  return (
    <div  className="relative bg-white min-h-screen flex items-center">
      <img src="/b2.jpg" alt="" />
    </div>
  );
};

export default CoreCompetencies;