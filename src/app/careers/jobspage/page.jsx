"use client";
 import { FaArrowRightLong } from "react-icons/fa6";
 import { FaSearch, FaSearchLocation } from "react-icons/fa";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/your-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-lg mb-4">Find the career of your dreams</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We're more than just a workplace.
            <br />
            We're a family.
          </h1>
          <p className="text-base md:text-lg mb-8">
            We know that finding a meaningful and rewarding job can be a long journey.
            Our goal is to make that process as easy as possible for you, and to create
            a work environment that's satisfying – one where you'll look forward to
            coming to every day. Start your journey with us by browsing available jobs.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md flex items-center justify-center gap-2 mx-auto">
            View Openings <FaArrowRightLong />
          </button>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="px-4 md:px-54 py-16 bg-white text-gray-400">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Filters */}
          <aside className="md:w-1/4">
            <h2 className="text-lg mb-2 text-black">Filters</h2>
            <div className="border border-gray-200 rounded p-4 space-y-6">
              <div>
                <h3 className=" mb-2">Job Type</h3>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Full time (2)
                </label>
                 <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Part time (4)
                </label>
              </div>
              <hr />
              <div>
                <h3 className=" mb-2">Work Experience</h3>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  2-3 years (1)
                </label>
                <label className="flex items-center gap-2 text-sm mt-2">
                  <input type="checkbox" />
                  3-4 years (1)
                </label>
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <main className="md:w-3/4">
            <h1 className="text-3xl text-black font-semibold mb-1">Join us</h1>
            <p className="text-lg text-gray-600 mb-6">Current Openings</p>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="flex flex-col w-full">
                 <h1 className="text-black">what</h1>
              <div className="flex border border-gray-300 rounded-md px-3 py-2 w-full">
               
                <input
                  type="text"
                  placeholder="Job title or skill"
                  className="w-full outline-none"
                />
                <FaSearch className="text-gray-400" />
              </div>
              </div>
              <div className="flex flex-col w-full">
                 <h1 className="text-black">where</h1>
              <div className="flex border border-gray-300 rounded-md px-3 py-2 w-full ">
                <input
                  type="text"
                  placeholder="City, state/province or country"
                  className="w-full outline-none"
                />
                <FaSearchLocation className="text-gray-400" />
              </div>
              </div>
                <div className="flex flex-col w-full">
                    <h1>Search</h1>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
                Search
              </button>
              </div>
            
            </div>

            {/* Job List */}
            <div className="space-y-8">
              {/* Job 1 */}
              <div className=" pt-4">
                <div className="flex justify-between">
                  <a href="#" className="text-orange-600 font-semibold text-lg hover:underline">
                    Project Executive
                  </a>
                  <div className="text-right text-sm text-gray-500">
                    Full time<br />
                    20/05/2025
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Mumbai, Maharashtra, India<br />
                  2-3 years
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  We are seeking a highly motivated and detail-oriented Project Executive
                  to join our team and assist in the planning, implementation, and
                  monitoring of...
                </p>
              </div>

              {/* Job 2 */}
              <div className=" pt-4">
                <div className="flex justify-between">
                  <a href="#" className="text-orange-600 font-semibold text-lg hover:underline">
                    Business Growth Manager
                  </a>
                  <div className="text-right text-sm text-gray-500">
                    Full time<br />
                    18/02/2025
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Mumbai, Maharashtra, India<br />
                  3-4 years
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Key Responsibilities: 1. New Business Acquisition & Revenue Growth.
                  Identify, prospect, and generate leads for potential clients in sectors
                  like D2C, E-...
                </p>
              </div>
            </div>
          </main>
        </div>
     
      </section>
         <a href="/">
        <div className="border-t border-b text-lg text-center mb-2 text-orange-500">
            visit website
        </div>
        </a>
    </>
  );
}
