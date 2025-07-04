// components/AnimatedLogo.jsx
"use client";
import { motion } from "framer-motion";
import React from "react";
import "./animated-logo.css"; // Custom styles for blend and positioning

const letters = ["F", "e", "a", "r", "l", "e", "s", "s"];

const AnimatedLogo = () => {
  return (
    <div className="relative flex space-x-1 text-[64px] font-serif font-bold leading-none">
      {letters.map((char, index) => (
        <div key={index} className="relative overflow-hidden">
          <span className="text-black dark:text-white z-10 relative">{char}</span>
          <motion.div
            className="absolute inset-0 box-overlay"
            initial={{ y: "100%" }}
            animate={{ y: "-10%" }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedLogo;
