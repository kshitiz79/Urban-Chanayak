"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>Allies | Creative Studio • Belfast | About</title>
        <meta
          name="description"
          content="A Belfast design studio for bold brands. Fearless creativity for identities that stand out. Dare to be different?"
        />
        <meta property="og:title" content="Allies | Creative Studio • Belfast | About" />
        <meta
          property="og:description"
          content="A Belfast design studio for bold brands. Fearless creativity for identities that stand out. Dare to be different?"
        />
        <meta
          property="og:image"
          content="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/67cf97beb15c794861405552_OG-img-allies.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="h-screen sticky top-0 flex flex-col justify-center items-center text-center px-4">
          <Image
            src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/67cf7cfd9944240f20700c86_ALLIES_FILMS-14.webp"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="-z-10 opacity-70"
          />
          <Image
            src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/67b7974561e5eb11ee3bbf3c_allies-logotype.svg"
            alt="Logo"
            width={180}
            height={60}
          />
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl max-w-4xl font-light mt-8"
          >
            is a creative studio founded on one simple belief – that the most extraordinary brands are born out of fearless creativity.
          </motion.h1>
        </section>

        {/* Fearlessly Creative Section */}
        <section className="py-20 px-8 md:px-24 bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">Fearlessly creative</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                We shout when others whisper, and whisper when others shout. Ignoring trends. Kicking against the system.
                Because extraordinary brands are fearless. They don’t fight in the same arena as everyone else. They create
                their own space. Play by their own rules.
              </p>
            </motion.div>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-red-600 p-10 rounded-xl text-white relative"
          >
            <Image
              src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/67c7328d940cf94324b77171_A-48.jpg"
              alt="Conference"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 opacity-10"
            />
            <div className="relative z-10 max-w-xl">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                It may not be what you expected, but it’ll be exactly what you need.
              </h3>
              <Link href="/work" className="inline-flex items-center gap-2 text-white font-medium border border-white px-4 py-2 mt-4">
                View our work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer CTA */}
        <footer className="bg-black text-white py-16 px-8 md:px-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Feel the fear, do it anyway. Contact your Allies.
          </motion.h2>
          <div className="mt-8">
            <Link href="/contact" className="text-white underline">
              Get in touch →
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
