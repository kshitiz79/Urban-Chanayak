"use client"
import React from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    name: 'Kevin McCaul',
    photo: '/download-2.jpg', // replace with your asset path
    bio: `Kevin is a client’s best friend, a straight-talker, a team player, and once you’re on board, your right-hand brand champion. He’s got grown‑up experience on both sides of the client/agency fence. Kevin founded Allies as he believes Ireland needs a serious reimagination of the agency experience, for both clients and creatives. And he’ll do whatever it takes to help you rise above the noise, and put your stamp on the market.`
  },
  {
    name: 'Emma Hetherington',
    photo: '/download-1.jpg', // replace with your asset path
    bio: `Big thinker. Creative dreamer. Eats, sleeps creativity. Emma is a designer with a love of brands that have big aspirations and the guts to break the rules. She’s a deep thinker and will push your brand as far as it can go. Emma founded Allies to give people the full‑blooded creativity they deserve. As she says, “If it’s not pushing boundaries, it’s not worth doing.”`
  }
];

export default function TeamSection() {
  return (
    <div>
      {/* Heading Section */}
      <motion.section
        className="h-screen flex items-center justify-center bg-beige-100 top-0 sticky"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-5xl font-serif">Meet your Allies</h2>
      </motion.section>

      {/* Member Sections with horizontal slide-in effect */}
{members.map((member, idx) => {
  const isEven = idx % 2 === 0;
  const imageVariant = {
    hidden: { opacity: 0, x: isEven ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  const textVariant = {
    hidden: { opacity: 0, x: isEven ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }
  };

  return (
    <section
      key={member.name}
      className={`h-screen flex items-center sticky top-0 px-8 rounded-t-4xl ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      } ${idx === 1 ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      {/* Image */}
      <motion.div
        className="w-1/2 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariant}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="rounded-lg object-cover max-h-[80vh]"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="w-1/2 space-y-6 max-w-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariant}
      >
        <h3 className="text-4xl font-serif leading-tight">
          {member.name.split(' ').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h3>
        <p className="text-base leading-relaxed">{member.bio}</p>
      </motion.div>
    </section>
  );
})}




    </div>
  );
}
