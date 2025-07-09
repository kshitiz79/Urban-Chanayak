"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            let’s make the web <br /> talk about your <br /> project
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-10 text-sm">
            {/* Representative Offices */}
            <div>
              <h4 className="mb-4 text-gray-400 uppercase tracking-wide">
                Representative Offices
              </h4>
              <ul className="space-y-4">
                <li>
                  🇨🇭 Switzerland, Zürich, 8004 <br />
                  Baarerstrasse 139 6300 Zug
                </li>
                <li>
                  🇪🇪 Estonia, Tallinn, 11317 <br />
                  Kajaka 8, Office 26
                </li>
                <li>
                  🇳🇴 Norway, Oslo, 0173 <br />
                  Fougstads Gate 2
                </li>
              </ul>
            </div>

            {/* Development Offices */}
            <div>
              <h4 className="mb-4 text-gray-400 uppercase tracking-wide">
                Development Offices
              </h4>
              <ul className="space-y-4">
                <li>
                  🇺🇦 Ukraine, Chernihiv, 14000 <br />
                  Kyiv’ska St, 11, Office 155
                </li>
                <li>
                  🇺🇦 Ukraine, Kyiv, 04071 <br />
                  Nyzhniy Val Str, 15, Office 131
                </li>
                <li>
                  🇺🇦 Ukraine, Lviv, 79039 <br />
                  Shevchenko Str, 120, Office 17
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-300">
            hello@cheitgroup.com
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <h4 className="text-xl font-medium">Get in touch</h4>
          <p className="text-sm text-gray-400">
            Our team will respond to you within 1 business day
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-[#1a1a1a] border border-gray-700 rounded-md text-white placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-[#1a1a1a] border border-gray-700 rounded-md text-white placeholder-gray-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-4 bg-[#1a1a1a] border border-gray-700 rounded-md text-white placeholder-gray-500 min-h-[150px]"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="robot" className="w-5 h-5" />
              <label htmlFor="robot" className="text-sm">
                I'm not a robot
              </label>
              <div className="ml-auto">
                {/* Placeholder for reCAPTCHA */}
                <div className="bg-gray-700 text-xs px-2 py-1 rounded">
                  reCAPTCHA
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-3 border border-red-500 rounded-md text-white hover:bg-red-500 transition"
            >
              Seize the day!
            </button>
          </form>
        </div>
      </div>

      {/* Optional overlay diagonal if needed */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-[#111111] to-black opacity-50 z-0"></div>
    </section>
  );
}
