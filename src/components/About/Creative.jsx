"use client";
import Image from "next/image";
import React from "react";

const Creative = () => {
  return (
    <div className="bg-white w-full mt-190">
    <section className="bg-white px-6 md:px-10">
      {/* Top Section */}
      <div className=" py-16 border-t-[1px] border-black flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8">
        {/* Heading */}
        <h2 className="text-xl md:text-8xl py-10 font-telegraf text-black leading-tight">
          What We Do
        </h2>

        {/* Description */}
        <p className="text-base md:text-xl max-w-xl font-telegraf text-black ">
          We shout when others whisper, and whisper when others shout. Ignoring trends.
          Kicking against the system. Because extraordinary brands are fearless.
          They don’t fight in the same arena as everyone else. They create their own space.
          Play by their own rules.
        </p>
      </div>

      {/* Image */}
      <div className="bg-[#f86c28] rounded-xl">
      <div className=" p-4 h-[400vh] md:h-[130vh] flex mb-10">
        <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden">
          <video 
          src="/fearless.mp4"
          className="object-cover w-full h-full p-8 "
          autoPlay
          muted
          loop
          />

         
        </div>
       
      </div>
      <p className="p-8 text-4xl -mt-18 pb-18  font-telegraf text-white">
        Over the past five years, we’ve delivered impactful outcomes for a distinguished clientele not by following convention, but by rewriting the playbook.
        </p>
        
        </div>
        
    </section>
    </div>
  );
};

export default Creative;
