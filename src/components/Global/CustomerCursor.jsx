"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [color, setColor] = useState("rgba(211, 103, 9, 0.8)"); // Start with orange

  // Use more orange tones and fewer others
  const colors = [
    "rgba(246, 119, 9, 0.8)",   // Vibrant orange
    "rgba(255, 81, 0, 0.8)",    // Slightly reddish orange
    "rgba(235, 82, 11, 0.8)",   // Deep orange
    "rgba(255, 165, 0, 0.8)",   // Soft orange
    "rgba(246, 119, 9, 0.8)",   // Repeat for more chance
    "rgba(246, 119, 9, 0.8)",
    "rgba(246, 119, 9, 0.8)",
  ];

  const createParticle = (x, y) => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = color;
    document.body.appendChild(particle);

    gsap.to(particle, {
      y: 50,
      opacity: 0,
      scale: 1,
      duration: 2,
      ease: "power2.out",
      onComplete: () => particle.remove(),
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out",
      });

      createParticle(e.clientX, e.clientY);
    };

    const changeColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
      cursorRef.current.style.backgroundColor = randomColor;
    };

    window.addEventListener("mousemove", handleMouseMove);
    const colorChangeInterval = setInterval(changeColor, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(colorChangeInterval);
    };
  }, [color]);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
