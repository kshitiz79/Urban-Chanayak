"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FaqSection from "@/components/Blog/FAQSection";
import { Link } from "lucide-react";

const page = () => {
  const socialIcons = [
    {
      name: "Instagram",
      icon: faInstagram,
      Link: "https://www.instagram.com/urbanchanakya.in/?igsh=ZTBiN2c2cXNlM2w%3D#",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      Link: "https://www.linkedin.com/company/urbanchanakya/?originalSubdomain=in",
    },
    {
      name: "Twitter",
      icon: faXTwitter,
      Link: "https://x.com/ChanakyaUrban",
    },
  ];
  

  return (
    <>
      <section className="bg-white py-20 pt-50">
        <div className="max-w-7xl mx-auto">
          <div>
            <h1 className="text-5xl text-black uppercase font-black whitespace-nowrap drop-shadow-[1px_1px_0_black]">
              Your brand is unique, and so are our solutions. <br /> Get in touch.
            </h1>
          </div>
        </div>

        <section className="flex flex-col md:flex-row gap-16 items-stretch justify-between px-6 md:px-10 py-16 bg-white">
          {/* Left - Contact Form */}
          <div className="w-full md:w-1/2 bg-[#182d3b] rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-white text-sm tracking-widest uppercase text-center">
              Send Us A Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Enter your Message"
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-black lactext-white font-medium rounded-md hover:bg-orange-500 transition"
              >
                Submit
              </button>
            </form>

            {/* Direct Email */}
            <div className="text-center text-white text-sm space-y-1">
              <div className="uppercase tracking-widest">Direct Email</div>
              <div className="text-lg font-light">hello@urbanchanakya.in</div>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-3 gap-4 mt-4">
            {socialIcons.map((item) => (
  <a
    key={item.name}
    href={item.Link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-lg py-8 flex flex-col items-center justify-center text-black hover:text-orange-500 transition"
  >
    <FontAwesomeIcon icon={item.icon} className="text-2xl" />
    <span className="text-xs mt-2 uppercase tracking-wider">
      {item.name}
    </span>
  </a>
))}

            </div>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/contact.png"
              alt="Team"
              width={620}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </section>
      <FaqSection/>
    </>
  );
};

export default page;
