
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How can I use animation to digital presence?",
    answer:
      "Animation enhances engagement, captures attention, and builds a stronger digital identity through dynamic storytelling.",
  },
  {
    id: 2,
    question: "I’m new to animation. Where should I start?",
    answer:
      "Start by identifying your goals. Explore different styles and consult animation professionals to guide your vision.",
  },
  {
    id: 3,
    question: "How long does an animation project take?",
    answer:
      "Project timelines vary, typically ranging from 2 to 8 weeks depending on complexity and scope.",
  },
  {
    id: 4,
    question: "What is your process for creating animations?",
    answer:
      "We start with concept development, move to storyboarding, design, animation, then final delivery with feedback loops.",
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
