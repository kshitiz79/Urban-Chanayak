"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const LogoSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const sectionTheme = entry.target.getAttribute("data-theme");
            setTheme(sectionTheme || "light");
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Adjust for sensitivity
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Image
      src={theme === "dark" ? "/logoblack.png" : "/logowhite.png"}
      alt="Logo"
      width={150}
      height={60}
      priority
    />
  );
};

export default LogoSwitcher;
