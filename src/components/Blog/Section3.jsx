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
    <div className="bg-white"> 
      <div className="min-h-screen py-20 bg-white max-w-5xl mx-auto ">
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
            src="https://cdn.prod.website-files.com/66336211b81e8a10a1428f79/6659a120e7e53787788be7f0_PC%20Mary%20Paquet_SOI%20Foundation%202.webp"
            alt=""
          />
          <p className="p-4 text-gray-500">
            Meg feels a "powerful" connection to the ice. © Mary Paquet/SOI
            Foundation
          </p>
        </div>
        <div className="ml-80 text-black py-16 ">
          <h1 className=" text-[30px]">
            Good morning Antarctica! Or is it goodnight? ‍
          </h1>
          ‍<br />
          <p className="text-xl">
            Spending time living aboard a research vessel in Antarctica can
            throw your body clock out of sync by confusing the circadian rhythm.
            This is because the polar regions have ‘polar day/polar night,’
            which is basically (depending on where you are on the continent and
            what time of year it is) 24-hour daylight. ‍
          </p>
          <br />
          <p className="text-xl">
            For Meg, the sun dipped below the horizon for 60 minutes each night
            at around 2 a.m., and it was well worth waiting up for and looking
            out the window from her room on the boat. ‍
          </p>
          <br />
          <p className="text-xl">
            She said: “It was always the most beautiful time of day where you
            could see the colors of the sunset. I’d be up again at 6 am so
            needless to say, some nights were short! ‍
          </p>
          <br />
          <p className="text-xl">
            “Every morning, we’d wake up, open the blackout blinds very slowly,
            put on our base layers, and head up to the dining area for
            breakfast. Everyone was on time, and no one was late, not even by 5
            minutes. The ship kept a tight schedule that must be respected.” ‍ ‍
          </p>
          <br />
          <h1 className="text-[30px]">Layering up ‍ ‍</h1>
          <br />
          <p className="text-xl">
            Dressing for the coldest continent on Earth is no easy feat. Picture
            getting ready to go skiing and multiply the layers a few times. For
            Meg, it was a daily performance that occurred during the 45 minutes
            between breakfast and docking off the big ship via zodiac
            (inflatable boat) onto land. ‍
          </p>
          <br />
          <p className="text-xl">
          “45 minutes can seem like a long time in theory, but in reality, it’s
          not,” Meg explains. “Firstly, you must - and I cannot stress this
          enough - go to the toilet as the land and ocean are preserved by the
          <span className="text-red-500 underline"> Antarctic Treaty</span>, so going to the toilet anywhere other than on the
          ship is not an option. ‍
          </p><br />
          <p className="text-xl">
            “Brushing your teeth is also an interesting one as you’re doing it
            with your sunglasses on! By the time you’ve gathered your affairs
            and put your four clothing layers on the bottom and seven on top,
            you make your way back up to regroup and get ready for the first
            dock off. Trust me, those 45 minutes go pretty Quickly"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
