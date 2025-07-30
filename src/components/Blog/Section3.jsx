"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Section3 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current.textContent;
    textRef.current.innerHTML = text
      .split(" ")
      .map((char) => `<span class="text-gray-500 inline-block">${char}</span>`)
      .join(" ");

    const spans = textRef.current.querySelectorAll("span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { color: "#6b7280" }, // Tailwind's gray-500
        {
          color: "#000000", // Tailwind's black
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative scroll-smooth bg-white">
      <div className=" py-10 bg-white max-w-5xl mx-auto px-8 md:px-0">
        <p
          ref={textRef}
          className="text-2xl md:text-4xl text-black leading-none"
        >
          <span className="underline text-orange-500">
            Dr. Himanta Biswa Sarma
          </span>{" "}
          uses optimism, development, and cultural connection to shape a
          positive and inclusive narrative.{" "}
          <span className="underline text-orange-500">Ashok Singhal</span> uses
          sharp messaging, ideological strength, and timely response to take
          control of fast-moving political moments.
        </p>

        <div className="text-black text-base md:text-xl mt-12 md:ml-80">
          <p>
            Both approaches work because they are authentic to the leader’s
            personality and political role. Both build visibility, trust, and
            loyalty.
          </p>

          <br />

          <h3 className="text-lg md:text-xl font-semibold mb-6 italic">
            Final Thought
          </h3>

          <p className="mb-4">
            In Assam, social media has become more than just a campaign tool. It
            is now a space where public image is built, leadership is
            demonstrated, and influence is exercised in real time. Political
            leaders who understand this have a clear edge.
          </p>
          <p className="mb-4">
            To stay relevant, a political leader must not only be digitally
            present but also digitally powerful. The platform may be virtual,
            but the impact is very real.
          </p>
        </div>

        <div className="mt-12">
          <img src="/blogpp.png" alt="" className="w-full h-auto" />
          <p className="p-4 text-gray-500 text-sm">
            Meg feels a "powerful" connection to the ice. © Mary Paquet/SOI
            Foundation
          </p>
        </div>

        <div className="md:ml-80 text-black py-16">
          <h1 className="text-xl md:text-[30px] font-semibold">
            This is Poriborton: How Urban Chanakya Powered BTR’s Historic
            Employment Drive
          </h1>

          <br />

          <p className="text-base md:text-xl">
            On June 17, 2025, history was made in the Bodoland Territorial
            Region (BTR). The results of a large-scale teacher recruitment drive
            were declared – transparent, fair, and purely merit-based...
          </p>

          <br />
          <p className="text-base md:text-xl">
            At the heart of this transformative event was Urban Chanakya, the
            team that not only ideated the end-to-end experience but also
            delivered a pioneering technological breakthrough within just 24
            hours...
          </p>

          <br />
          <p className="text-base md:text-xl">
            Here’s how it worked: Candidates were asked to submit their school
            preferences. As each candidate was called (strictly according to
            their rank...)...
          </p>

          <br />
          <p className="text-base md:text-xl">
            It was a technological and logistical feat powered by precision,
            innovation, and a deep commitment to good governance.
          </p>

          <br />
          <p className="text-base md:text-xl">
            Urban Chanakya didn’t just stop at the backend...
          </p>

          <br />
          <p className="text-base md:text-xl">
            The visual identity, messaging, and event flow were crafted to
            reflect the BTR Government’s unwavering commitment...
          </p>

          <br />
          <p className="text-base md:text-xl">
            In a moment of immense significance, Urban Chanakya delivered not
            just a campaign, but a system, a process, and a new standard...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
