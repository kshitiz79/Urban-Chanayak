"use client";
import React from "react";

const jobs = [
  {
    title: "Senior PHP (Laravel) Developer",
    location: "REMOTE WORK",
    note: "UKRAINIAN CANDIDATES ONLY",
    tags: ["PHP 8.1+", "LARAVEL 10+", "POSTGRESQL", "ES6+", "NUXT2/VUE2"],
    button: true,
  },
  {
    title: "Middle Front-End Developer (Vue.js)",
    location: "REMOTE",
    note: "UKRAINIAN CANDIDATES ONLY",
    tags: ["JAVASCRIPT", "VUE.JS", "NUXT.JS", "HTML5", "CSS3"],
    button: false,
  },
  {
    title: "Middle PHP (Laravel) Developer",
    location: "REMOTE",
    note: "UKRAINIAN CANDIDATES ONLY",
    tags: ["LARAVEL", "POSTGRESQL", "PHPUNIT", "VUE.JS"],
    button: false,
  },
];

export default function VacanciesSection() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Title Section */}
        <div>
          <p className="uppercase text-sm text-gray-400 mb-4">Our Vacancies</p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-10">
            build your <br /> brilliant career <br /> with us
          </h2>
        
        </div>

        {/* Right Job Cards */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl border border-gray-700 px-6 py-6 flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0"
            >
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  {job.location}{" "}
                  <span className="text-red-500 ml-4">
                    {job.note}
                  </span>
                </p>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-black border border-gray-600 text-xs px-3 py-1 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {job.button && (
                <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-md text-sm">
                  Learn more
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
