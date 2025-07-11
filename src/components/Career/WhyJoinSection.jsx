"use client";
import { CheckCircle } from "lucide-react";

const features = [
  " A Supportive, Inclusive Culture",
  " Meaningful Work, Real Impact",
  " Room to Learn and Lead",
  "Workplace That Feels Like Home",
];

export default function WhyJoinSection() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left content */}
        <div>
          <p className="text-sm uppercase text-gray-400 mb-3">Our Features</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            why join UC
          </h2>
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-lg">
                <CheckCircle className="text-green-400 w-6 h-6 mt-1" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right highlight box */}
        <div className="text-red-500 text-xl md:text-2xl font-medium leading-relaxed">
          The right place to <br />
          make the best <br />
          version of yourself! <br />
          <span className="inline-block mt-2">Hop in!</span>
        </div>
      </div>
    </section>
  );
}
