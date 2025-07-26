"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Section4 = () => {
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
      <div className=" bg-white max-w-6xl px-20 pb-10">
        <p ref={textRef} className="text-4xl text-black">
          <span className="underline text-orange-500">
            Bodoland CEM Cup 2025: How Urban Chanakya Turned a Regional
            Tournament into Northeast India’s Loudest Roar to the Prime Minister
            Narendra Modi
          </span>{" "}
        </p>
      </div>
      <div>
        <div className="w-screen">
          <img
            src="/blognew2.png"
            alt="jj"
            className="w-full h-auto"
          />
        </div>

        <div className="text-black text-xl mt-12 ml-80 mr-40">
          <p>
            The first-ever Bodoland CEM Cup 2025 wasn’t just a football
            tournament – it was a movement. With 420 VCDCs, 3,760 teams, and
            67,680 players, it became the largest grassroots football initiative
            in the North East. And at the heart of its powerful storytelling,
            branding, and on-ground execution was Urban Chanakya – the team that
            transformed a sporting event into a region-wide celebration of
            football and unity.
          </p>
          <br />

          <p className="mb-4">
            The campaign began with a clear vision: to spread the message of
            “Peace and Unity through Football.” Urban Chanakya conceptualised a
            striking brand identity for the Cup, blending cultural pride with
            contemporary energy. The tournament’s official slogan : “One Goal.
            One Passion. One Bodoland.”, captured the spirit of BTR and its
            youth.
          </p>
          <p className="mb-4">
            From design decks to final deliverables, Urban Chanakya handled
            end-to-end execution. All 420 VCDCs were activated through a uniform
            yet locally resonant visual language. Bold flex banners created a
            visual festival across the BTR. Stadiums, community fields, and town
            squares wore the colours of the Cup.
          </p>
          <p>
            On digital platforms, the campaign came alive with matchday
            graphics, impactful videos, countdown reels, and celebration posts.
            Daily updates and effective storytelling turned the Bodoland CEM Cup
            into a social media sensation. Communities saw their local boys in
            the spotlight, building local pride like never before.
          </p>
          <br />

          <p className="mb-4">
            Such was the impact of Urban Chanakya’s powerful storytelling that
            none less than Prime Minister Narendra Modi mentioned the Bodoland
            CEM Cup 2025 in his Mann ki Baat address. He lauded the tournament
            as a shining example of grassroots empowerment through sports,
            highlighting how football became a medium to spread the message of
            peace and unity.
          </p>
          <p className="mb-4">
            Then came the Grand Finale on 15th July at SAI Stadium, Kokrajhar –
            the City of Peace. In the presence of Assam CM Dr. Himanta Biswa
            Sarma, BTR CEM Shri Pramod Boro and a host of dignitaries, Urban
            Chanakya scripted and executed a show-stopping experience. The
            stadium roared with excitement as a drone descended from the sky,
            carrying the final match ball in a dramatic moment of awe and
            applause. It was a futuristic touch that symbolised Bodoland’s
            forward march.
          </p>
          <p>
            As the sun set, fireworks lit up the Kokrajhar sky, marking not just
            the finale of a tournament but the triumph of a people’s collective
            spirit. Urban Chanakya ensured every second, from the entry of teams
            to the trophy lift, was choreographed, filmed, and celebrated in
            style. The Bodoland CEM Cup 2025 stands as a testament to the power
            of sport, and to Urban Chanakya’s ability to turn that power into an
            unforgettable brand narrative.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
        <div className="mt-12">
          <img
            src="/bloglast.png"
            alt="fghjk"
          />
          <p className="p-4 text-gray-500">
          Our Guwahati, Our Responsibility. – Urban Chanakya and GMC

          </p>
        </div>
        <div className="ml-80 text-black py-16 ">
          <h1 className=" text-[30px] font-semibold">
          Our Guwahati, Our Responsibility. – Urban Chanakya and GMC
          </h1>
          ‍<br />
          <p className="text-xl">
          In July 2024, Urban Chanakya partnered with Guwahati Municipal Corporation (GMC) to lead a bold transformation – redefining how a city communicates with its citizens. What began as a digital revamp turned into a civic movement. The tagline “Our Guwahati, Our Responsibility”, coined by Urban Chanakya, became the rallying cry of a cleaner, more aware Guwahati.

          </p>
          <br />
          <p className="text-xl">
          Within just one year, Guwahati soared from Rank 402 to Rank 44 in the Swachh Survekshan 2024 rankings, winning two prestigious honours:



          </p>
          <p>✅Cleanest City in the North East
         </p>
         <p> ✅ Promising City Award (East Zone)</p>
          <br />
          <p className="text-xl">
          At the heart of this success was a year-long digital storytelling strategy. Urban Chanakya’s effective digital strategy led to major awareness campaigns of GMC like Swachhata Hi Sewa 2024, Guwahati Swacchata Abhiyan 2024–25, and the ongoing Safai Apnao, Bimari Bhagao 2025, becoming mass movements.

          </p>
          <br />
          <p className="text-xl">
          Each campaign turned routine municipal work like garbage clearance, drain cleaning, worker recognition, into daily digital narratives that informed, inspired, and involved citizens.


          </p>
          <br />
          <br />
          <p className="text-xl">
          From reels and infographics to live coverage and community engagement, Urban Chanakya built a real-time communication engine across platforms that made governance visible, engaging, and participatory.

          </p>
          <br />
          <p className="text-xl">
          Guwahati’s transformation is not just about better sanitation – it’s about a city that found its voice, pride, and purpose online. 

          </p>
          <br />
          <p className="text-xl">
          From 402 to 44. From overlooked to awarded. Urban Chanakya didn’t just manage a page. It sparked a movement.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section4;
