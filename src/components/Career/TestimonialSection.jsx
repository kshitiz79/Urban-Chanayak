"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TestimonialSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-20 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left 30%: Heading */}
        <div className="w-full md:w-[30%] mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Join Urban Chanakya?
          </h2>
        </div>

        {/* Right 70%: Testimonial */}
        <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-10">
          {/* Quote Section */}
          <div className="text-lg relative flex-1">
            <p className="mb-2">
              <h1 className="text-xl underline text-orange-600">
                🔸 A Supportive, Inclusive Culture
              </h1>
              We take pride in fostering a space where everyone feels respected,
              heard, and encouraged to grow. Your ideas matter here. Your voice
              is valued.
            </p>
            <p className="mb-2">
              <h1 className="text-xl underline text-orange-600">
                {" "}
                🔸 Meaningful Work, Real Impact{" "}
              </h1>
              Whether it’s a campaign that shifts public opinion or a brand
              story that inspires—your work will help create real change
              on-ground and online.
            </p>
            <p className="mb-2">
              <h1 className="text-xl underline text-orange-600">🔸 Room to Learn and Lead </h1>
              From digital media and design to strategy and event execution,
              you’ll have the opportunity to explore your interests and build a
              fulfilling career.
            </p>
            <p>
              <h1 className="text-xl text-orange-500 underline">
                🔸Workplace That Feels Like Home{" "}
              </h1>
              With collaboration at the heart of everything we do, you’ll be
              surrounded by people who genuinely care—for the work and for one
              another.
            </p>

         
          </div>

          {/* Navigation Arrows */}
        </div>
      </div>
      <div className="py-12">
       <iframe width="1379" height="705" src="https://www.youtube.com/embed/a5He5teHaDA?si=wlD2XDegjTRN1yA6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl font-bold">How Our Hiring Process Works</h1>
        <div className="text-xl py-12 max-w-6xl ml-8">
        <p>🔸 See all our openings on our hiring portal and apply directly with your CV, cover letter, and portfolio (if applicable).</p>
        <p>🔸 Don’t see a role that fits? We may have something special lined up for you soon. Drop us a line at 
            <a href="mailto:hello@urbanchanakya.in" className="text-blue-700"> hello@urbanchanakya.in </a>we’re always open to discovering exceptional talent.</p>
        <p>🔸 Have a referral? If you’ve worked with someone from the Urban Chanakya family or know one personally, ask for a referral code and mention it while applying.</p>
        </div>


        <Link href="/careers/jobspage">

        <button className="bg-orange-500 rounded-3xl text-white p-3 px-10 flex items-center gap-2 hover:bg-white hover:text-black hover:border">
  See All Openings <FaArrowRightLong />
</button>
</Link>

      </div>
    </section>
  );
}
