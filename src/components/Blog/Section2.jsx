"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollColorText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current.textContent;
    textRef.current.innerHTML = text
      .split("  ")
      .map((char) => `<span class="text-gray-500 inline-block">${char}</span>`)
      .join("  ");

    const spans = textRef.current.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { color: "#6b7280" }, // Tailwind's gray-500
        {
          color: "#000000", // Tailwind's black
          stagger: 0.05, // Delay between each letter
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%", // Start when 80% from top of viewport
            end: "bottom 20%", // End when 20% from bottom
            scrub: 1, // Smooth scroll syncing
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white scroll-smooth">
      <div className="min-h-screen py-20 bg-white max-w-5xl mx-auto">
        <p ref={textRef} className="text-4xl text-black">
        In today’s political reality, social media is not just a platform. It is the main stage. For political leaders in Assam, it has become a powerful medium to communicate vision, counter opposition, and shape public perception. The digital voice of a leader now carries as much weight as their speech at a rally or a statement in the Assembly
.
        </p>
      <div className="text-black text-xl mt-12 ml-80">
  <h2 className="text-2xl font-bold mb-4">Case Study 1: Himanta Biswa Sarma</h2>
  <h3 className="text-xl font-semibold mb-6 italic">The Storyteller of Governance</h3>

  <p className="mb-4">
    Dr. Himanta Biswa Sarma, the Chief Minister of Assam, has developed a commanding digital presence. 
    His style is consistent, culturally rooted, and development-focused.
  </p>

  <p className="mb-4 font-semibold">What defines his strategy:</p>
  <ul className="list-disc list-inside ml-4 mb-6">
    <li>He posts regularly about government work, public welfare schemes, and ground-level progress.</li>
    <li>His content celebrates Assamese culture and tradition, creating a strong emotional bond with the people.</li>
    <li>He uses Assamese, Hindi, and English to ensure accessibility for all audiences across the state and beyond.</li>
  </ul>

  <p className="mb-4">
    A defining example was seen during the COVID-19 pandemic. He used <strong>X</strong> as a real-time helpline, 
    personally responding to citizens, coordinating health infrastructure, and setting an example in digital crisis management. 
    His approach built trust across demographic and political lines.
  </p>
</div>

        <div className="mt-12">
          <img
            src="/blog/assam-model1.png"
            alt=""
          />
          
        </div>
      <div className="ml-80 text-black py-16">
  <h2 className="text-2xl font-bold mb-4">Case Study 2: Ashok Singhal</h2>
  <h3 className="text-xl font-semibold mb-6 italic">The Crisis Communicator</h3>

  <p className="text-xl mb-4">
    Ashok Singhal, the Minister of Housing and Urban Affairs, brings a contrasting but equally effective style. 
    His posts are bold, immediate, and unapologetically ideological.
  </p>

  <p className="text-xl font-semibold mb-2">Key pillars of his strategy:</p>
  <ul className="list-disc list-inside text-xl mb-6 ml-4">
    <li>He reacts swiftly to political events, often shaping the public narrative before others can respond.</li>
    <li>His language is firm and emotionally charged, making his posts resonate in high-tension moments.</li>
    <li>He connects state-level incidents with national-level sentiments, reinforcing the ideological line of the party.</li>
  </ul>

  <p className="text-xl mb-4">
    Two standout moments illustrate his digital strategy.
  </p>

  <p className="text-xl mb-4">
    In June 2025, he strongly condemned protestors who allegedly threw water bottles at the Chief Minister during a public appearance. 
    He called it an act of organized anarchy, immediately framing the incident as a breakdown of democratic norms. 
    The post drew widespread attention and reinforced a law-and-order message.
  </p>

  <p className="text-xl mb-4">
    Earlier, in May 2025, he criticized Rahul Gandhi for allegedly echoing anti-national sentiment. 
    The post went viral, with national media amplifying his message. 
    It shifted a state-level issue into the national conversation on patriotism and security.
  </p>

  <p className="text-xl">
    The impact is strategic. Singhal’s digital persona projects strength, ideological clarity, and readiness to confront challenges head-on. 
    His audience views him as a protector of the party’s dignity and values.
  </p>
</div>

      </div>
    </div>
  );
};

export default ScrollColorText;
