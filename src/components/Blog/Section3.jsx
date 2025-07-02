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
      .split("")
      .map((char) => `<span class="text-gray-500 inline-block">${char}</span>`)
      .join("");

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
          Canadian artist Meg O’Hara is one of 11th Hour Racing’s newest
          ambassadors; an artist and environmentalist, her work not only
          inspires but educates people globally about the ever-changing state of
          our planet.
        </p>
        <div className="text-black text-xl mt-12 ml-80">
          <p>
            Her unique art focuses on ocean conservation in the polar regions,
            and she is often selected to participate in various expeditions to
            the Arctic, Antarctica, and other isolated locations (alongside
            explorers and scientists) to help bring to life the beauty—but also
            the drastic changes—of these regions. As she puts it, through her
            art, she’s{" "}
            <i>
              “found purpose in bridging the gap between science and
              communication through art.”
            </i>
          </p>
          <br />
          <br />
          <p>
            Originally from Toronto, Meg is a Fellow of the{" "}
            <span className="underline text-red-500">
              {" "}
              Royal Canadian Geographical Society
            </span>
            . She’s also a Member International at{" "}
            <span className="text-red-500 underline"> The Explorers Club</span>,
            a WINGS WorldQuest Flag Carrier, and a Creative Ambassador for
            Protect Our Winters. Her{" "}
            <span className="text-red-500 underline">
              ever-growing list of accolades{" "}
            </span>
            is impressive.{" "}
          </p>
          <br /> <br />
          <p>
            ‍To give you an idea of just how popular her art and the story
            behind it is becoming, last year she was a ‘Featured Artist’ for
            Ocean Week and as part of that project, her work was included in the
            James Cameron exhibit in conjunction with National Geographic,
            Rolex, Woods Hole Oceanographic Institute (WHOI) and many more.{" "}
          </p>
          <br /> <br />
          <p>
            We’re excited that Meg agreed to take us behind the scenes for a day
            in her life as an ‘Artist in Residence’ for a Canadian delegation in
            Antarctica looking at the impact of climate change in a remote
            region few think about, and even fewer visit.
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
          <span className="text-red-500 underline">Antarctic Treaty</span>, so going to the toilet anywhere other than on the
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
