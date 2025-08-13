"use client";

import Image from "next/image";
import React from "react";

const WebDesign = () => {
  return (
    <section className=" relative sticky top-0 h-[110vh] scroll-smooth w-full min-h-screen bg-white  text-black flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-10 flex flex-col justify-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology, Data & Governance Enablement</h1>

        <ul className="text-base md:text-lg font-semibold space-y-2 mb-6">
         <li>•	Custom Software Development & Services</li>
         <li>•	Government Recruitment & Appointment Systems</li>
         <li>•	Political Membership Tools</li>
         <li>•	Political Organization Reporting & Analysis System</li>
         <li>•	Electoral Data Mapping & Digitalization</li>
         <li>•	Workflow Automation & Data Dashboards</li>
         <li>•	Web Design & Integration</li>
        </ul>

        <div className="text-gray-800 text-base md:text-lg leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            21st century governance demands more than intent - it demands intelligent infrastructure and innovative implementation. Urban Chanakya builds digital ecosystems that transform how governments operate and political organizations mobilize. From streamlining recruitment processes and scaling membership networks to designing real-time reporting tools and intelligent data systems, our solutions bridge complexity with clarity. We fuse technology with transparency, embed IT with insights - enabling sharper decisions, faster execution, and systemic transformation.
            </p>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[200px] md:min-h-full">
        <Image
          src="/webdesign.gif"
          alt="Web Design"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default WebDesign;
