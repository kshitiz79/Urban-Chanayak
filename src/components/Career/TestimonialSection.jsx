"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TestimonialSection() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 py-12 text-black">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left 30%: Heading */}
        <div className="w-full md:w-[30%]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Why Join Urban Chanakya?
          </h2>
        </div>

        {/* Right 70%: Testimonial */}
        <div className="w-full md:w-[70%] flex flex-col gap-6">
          {/* Quote Section */}
          <div className="text-base sm:text-lg md:text-xl space-y-6">
            <div>
              <h3 className="text-[#f7680e] font-semibold underline text-lg sm:text-xl">
                🔸 A Supportive, Inclusive Culture
              </h3>
              <p>
                We take pride in fostering a space where everyone feels respected,
                heard, and encouraged to grow. Your ideas matter here. Your voice
                is valued.
              </p>
            </div>
            <div>
              <h3 className="text-[#f7680e] font-semibold underline text-lg sm:text-xl">
                🔸 Meaningful Work, Real Impact
              </h3>
              <p>
                Whether it’s a campaign that shifts public opinion or a brand
                story that inspires—your work will help create real change
                on-ground and online.
              </p>
            </div>
            <div>
              <h3 className="text-[#f7680e] font-semibold underline text-lg sm:text-xl">
                🔸 Room to Learn and Lead
              </h3>
              <p>
                From digital media and design to strategy and event execution,
                you’ll have the opportunity to explore your interests and build a
                fulfilling career.
              </p>
            </div>
            <div>
              <h3 className="text-[#f7680e] font-semibold underline text-lg sm:text-xl">
                🔸 Workplace That Feels Like Home
              </h3>
              <p>
                With collaboration at the heart of everything we do, you’ll be
                surrounded by people who genuinely care—for the work and for one
                another.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Video */}
      <div className="py-12">
        <div className="relative w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/a5He5teHaDA?si=wlD2XDegjTRN1yA6"
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">How Our Hiring Process Works</h2>
        <div className="text-base sm:text-lg space-y-4 ml-0 sm:ml-4">
          <p>
            🔸 See all our openings on our hiring portal and apply directly with your CV, cover letter, and portfolio (if applicable).
          </p>
          <p>
            🔸 Don’t see a role that fits? We may have something special lined up for you soon. Drop us a line at{" "}
            <a href="mailto:hello@urbanchanakya.in" className="text-blue-700 underline">hello@urbanchanakya.in</a> — we’re always open to discovering exceptional talent.
          </p>
          <p>
            🔸 Have a referral? If you’ve worked with someone from the Urban Chanakya family or know one personally, ask for a referral code and mention it while applying.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6">
          <Link href="/careers/jobspage">
            <button className="bg-orange-500 rounded-3xl text-white py-3 px-6 sm:px-10 w-full sm:w-auto flex justify-center sm:inline-flex items-center gap-2 hover:bg-white hover:text-black hover:border border-black transition">
              See All Openings <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
