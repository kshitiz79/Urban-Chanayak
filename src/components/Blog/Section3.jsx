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
    <div className="scroll-smooth bg-white"> 
      <div className="min-h-screen py-10 bg-white max-w-5xl mx-auto ">
        <p ref={textRef} className="text-4xl text-black">
        <span className="underline text-orange-500">  Dr. Himanta Biswa Sarma </span>uses optimism, development, and cultural connection to shape a positive and inclusive narrative.
<span className="underline text-orange-500"> Ashok Singhal</span> uses sharp messaging, ideological strength, and timely response to take control of fast-moving political moments.
        </p>
        <div className="text-black text-xl mt-12 ml-80">
          <p>
           Both approaches work because they are authentic to the leader’s personality and political role. Both build visibility, trust, and loyalty.

          
          </p>
          <br />
        
          <h3 className="text-xl font-semibold mb-6 italic">Final Thought</h3>

  <p className="mb-4">
    In Assam, social media has become more than just a campaign tool. It is now a space where public image is built, leadership is demonstrated, and influence is exercised in real time. Political leaders who understand this have a clear edge.
  </p>
    <p className="mb-4">
    To stay relevant, a political leader must not only be digitally present but also digitally powerful. The platform may be virtual, but the impact is very real.
  </p>

       
        </div>
        <div className="mt-12">
          <img
            src="/blogpp.png"
            alt=""
          />
          <p className="p-4 text-gray-500">
            Meg feels a "powerful" connection to the ice. © Mary Paquet/SOI
            Foundation
          </p>
        </div>
        <div className="ml-80 text-black py-16 ">
          <h1 className=" text-[30px] font-semibold">
          This is Poriborton : How Urban Chanakya Powered BTR’s Historic Employment Drive

          </h1>
          ‍<br />
          <p className="text-xl">
          On June 17, 2025, history was made in the Bodoland Territorial Region (BTR). The results of a large-scale teacher recruitment drive were declared – transparent, fair, and purely merit-based. But what followed the very next day was nothing short of revolutionary. On June 18, 1,337 Graduate and Postgraduate Teachers from across BTR received their appointment letters through a seamless, real-time, and fully transparent process that set a new national benchmark.

          </p>
          <br />
          <p className="text-xl">
          At the heart of this transformative event was Urban Chanakya, the team that not only ideated the end-to-end experience but also delivered a pioneering technological breakthrough within just 24 hours.
The challenge was clear: how to ensure that each selected candidate received a school posting based on their merit rank and preference, without chaos, lobbying, or delays. The solution? A first-of-its-kind, IT-enabled, real-time preference matching system – conceived, designed, coded, tested, and deployed by Urban Chanakya in under a day.

          </p>
          <br />
          <p className="text-xl">
          Here’s how it worked: Candidates were asked to submit their school preferences. As each candidate was called (strictly according to their rank in the merit list) the system matched their preferences with available vacancies. If the preferred school was available, the posting was confirmed instantly. The candidate received their appointment letter on the spot, and the concerned departments were notified in real time, digitally, without paperwork or delay.

          </p>
          <br />
          <p className="text-xl">
          It was a technological and logistical feat powered by precision, innovation, and a deep commitment to good governance.

          </p>
          <br />
 
          <br />
          <p className="text-xl">
          Urban Chanakya didn’t just stop at the backend. From branding the event as “This is Poriborton” to managing its digital coverage, live updates, and strategic communication, the team ensured that every candidate felt the dignity and pride of being part of a truly merit-based system.

          </p>
          <br />
          <p className="text-xl">
          The visual identity, messaging, and event flow were crafted to reflect the BTR Government’s unwavering commitment to transparency and fairness. This wasn’t just an employment drive – it was a statement of intent, a declaration that BTR is ready to lead the way in governance reform.

          </p><br />
          <p className="text-xl">
          In a moment of immense significance, Urban Chanakya delivered not just a campaign, but a system, a process, and a new standard. What BTR promised, it delivered. And behind that delivery was a team that believed in not just executing change – but embodying it.
          This is Poriborton. This is Urban Chanakya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
