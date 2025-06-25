"use client";
import React, { useEffect, useRef, useState } from "react";
import DualImage from "./DualImage";
import SplitImageLayout from "./SplitImageLayout";

const ScrollAwareSection = () => {
  const sectionRef = useRef(null);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger when top of section reaches mid of screen
      if (rect.top < windowHeight / 2) {
        setIsPast(true);
      } else {
        setIsPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <DualImage isPast={isPast} />
      <SplitImageLayout isPast={isPast} />
    </div>
  );
};

export default ScrollAwareSection;
