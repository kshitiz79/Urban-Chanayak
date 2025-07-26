
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What’s in Our Playbook?",
    answer: (
      <>
        We do it all, and we do it well
        <br />
        ✅
        Political campaigns
        <br /> ✅Government outreach   <br />
        ✅Corporate communication   <br /> 
        ✅Strategic communication & crisis Management   <br />
         ✅Digital strategy & design   <br /> ✅ Mass mobilisation Clcampaigns   <br /> ✅High-end video productions From concept to execution – we own the outcome.
      </>
    ),
  },
  {
    id: 2,
    question: "Running for Office? We’ve Got You Covered.",
    answer: (
      <>
        We help political leaders build powerful, winning narratives and win trust, online, on-ground, and in every conversation.

        


        <br /> ✅Campaign strategy
        <br />
        ✅Corporate communication   <br /> 
        ✅Digital war rooms

        <br />
         ✅Digital strategy & design   <br /> ✅ Crisis & reputation management
         <br /> ✅Technology-based election management
         You lead. We amplify.
      </>
    ),
  },
  {
    id: 3,
    question: "Are You a Government Body? Let Us Help You Build Public Trust.",
    answer: (
      <>
        We make government initiatives and policies relatable and visible. Our services cover:
        <br />
        ✅Scheme awareness campaigns
        <br />
        ✅Real-time service communication
        <br />
        ✅Behaviour change initiatives
        <br />
        ✅Event design and media content
        <br />
        ✅Call Centres and Public Feedback
        <br />
        ✅Crisis Management
        <br />
        We turn government work into citizen confidence.
      </>
    ),
  },
  {
    id: 4,
    question: "A Brand or Corporate? We Build Your Voice",
    answer: (
      <>
        We help brands communicate with clarity and purpose. Our offerings include:
        <br />
        ✅Branding and strategic communication
        <br />
        ✅CSR storytelling and visibility
        <br />
        ✅End-to-end digital campaigns
        <br />
        We don't just tell your story. We build reputation.
      </>
    ),
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-42">
        <h2 className="text-5xl font-black uppercase text-black  drop-shadow-[1px_1px_0_black]">FAQs</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
           <div key={faq.id} className="border-b py-10 group cursor-pointer text-black">
           <button
             className="w-full flex justify-between items-start text-left transition-all"
             onClick={() => toggleFAQ(faq.id)}
           >
             <div className="flex gap-6 transform transition-transform duration-300 group-hover:translate-x-4">
               <span className="text-gray-300 text-4xl font-medium">
                 {String(index + 1).padStart(2, "0")}
               </span>
               <span className="text-black text-4xl font-light">
                 {faq.question}
               </span>
             </div>
             <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full text-3xl text-black font-light transition-transform duration-300 group-hover:scale-110">
  {openId === faq.id ? "−" : "+"}
</div>

           </button>
         

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    className="pl-[4.5rem] mt-4 text-gray-600 text-2xl"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
