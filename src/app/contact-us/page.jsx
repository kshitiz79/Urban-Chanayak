"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import FaqSection from "@/components/Blog/FAQSection";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "", 
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://ucbankend.onrender.com/api/message/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

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
      <section className="bg-white py-20 px-4 sm:px-6 2xl:px-10">
        <div className="max-w-full mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-medium leading-tight drop-shadow-[1px_1px_0_black] uppercase mt-10">
            Your brand is unique, and so are our solutions. <br className="hidden md:block" /> Get in touch.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch justify-between">
          {/* Left - Contact Form */}
          <div className="w-full md:w-1/2 bg-[#182d3b] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="text-white text-sm tracking-widest uppercase text-center 2xl:text-3xl">
              Send Us A Message
            </h3>

            <form className="space-y-4 2xl:mt-10" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 2xl:py-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
                required
              />

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 2xl:py-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 2xl:py-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                className="w-full px-4 py-3 2xl:py-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your Message"
                className="w-full px-4 py-3 2xl:py-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 2xl:py-4 2xl:text-2xl bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>

            {/* Direct Email */}
            <div className="text-center text-white text-sm 2xl:text-xl space-y-1 pt-4">
              <div className="uppercase tracking-widest">Email Us at</div>
              <div className="text-lg 2xl:text-2xl font-light">hello@urbanchanakya.in</div>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {socialIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg py-6 2xl:py-8 flex flex-col items-center justify-center text-black hover:text-orange-500 transition"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                  <span className="text-xs mt-2 uppercase tracking-wider 2xl:text-2xl">
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
              className="w-full h-auto  object-cover md:h-full"
            />
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
};

export default page;
