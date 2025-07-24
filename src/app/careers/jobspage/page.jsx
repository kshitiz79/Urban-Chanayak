"use client";
import { useState, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaSearch, FaSearchLocation } from "react-icons/fa";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    source: "",
  });

  const resumeRef = useRef();
  const portfolioRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5001/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", `${form.firstName} ${form.lastName}`);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("job", selectedJob._id);
    formData.append("resume", resumeRef.current.files[0]);
    formData.append("portfolio", portfolioRef.current.files[0]);

    try {
      const res = await fetch("http://localhost:5001/api/applications/apply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Application submitted successfully!");
        setShowModal(false);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          source: "",
        });
        resumeRef.current.value = "";
        portfolioRef.current.value = "";
      } else {
        alert("Failed to submit application.");
      }
    } catch (err) {
      console.error("Application submission error:", err);
      alert("An error occurred while submitting your application.");
    }
  };

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
          <aside className="md:w-1/4">
            <h2 className="text-lg mb-2 text-black">Filters</h2>
            <div className="border border-gray-200 rounded p-4 space-y-6">
              <div>
                <h3 className="mb-2">Job Type</h3>
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
                <h3 className="mb-2">Work Experience</h3>
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
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="pt-4 cursor-pointer"
                  onClick={() => openModal(job)}
                >
                  <div className="flex justify-between">
                    <span className="text-orange-600 font-semibold text-lg hover:underline">
                      {job.title}
                    </span>
                    <div className="text-right text-sm text-gray-500">
                      {job.type || "Full time"}
                      <br />
                      {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : ""}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {job.location || "Mumbai, Maharashtra, India"}
                    <br />
                    {job.experience || "2-3 years"}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>

      <a href="/">
        <div className="border-t border-b text-lg text-center mb-2 text-orange-500">
          visit website
        </div>
      </a>

      {/* Modal Popup */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-black">
              Apply for {selectedJob.title}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Phone No</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Portfolio</label>
                <input type="file" className="w-full border rounded px-3 py-2" ref={portfolioRef} />
              </div>
              <div>
                <label className="block text-gray-700">Resume</label>
                <input type="file" className="w-full border rounded px-3 py-2" ref={resumeRef} />
              </div>
              <div>
                <label className="block text-gray-700">How did you hear about us?</label>
                <input
                  type="text"
                  name="source"
                  value={form.source}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="bg-gray-100 rounded p-4">
                <div className="font-semibold text-black">{selectedJob.title}</div>
                <div className="text-sm text-gray-600">{selectedJob.type || "Full time"}</div>
                <div className="text-sm text-gray-600">
                  {selectedJob.createdAt ? new Date(selectedJob.createdAt).toLocaleDateString() : ""}
                </div>
                <div className="text-sm text-gray-600">{selectedJob.location || "Mumbai, Maharashtra, India"}</div>
                <div className="text-sm text-gray-600">{selectedJob.experience || "2-3 years"}</div>
                <div className="text-xs text-gray-700 mt-2">{selectedJob.description}</div>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
