"use client";

import React, { useEffect, useState } from "react";

import ArtQuoteSection from "@/components/Blog/ArtQuoteSection";
import Section1 from "@/components/Blog/Section1";
import Section2 from "@/components/Blog/Section2";
import Section3 from "@/components/Blog/Section3";
import Section4 from "@/components/Blog/Section4";

const EvarsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/blog") // adjust if your backend URL changes
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);

  return (
    <>
      {/* Static blog sections */}
      <Section1 />
      <Section2 />
      <ArtQuoteSection />
      <Section3 />
      <Section4 />

      {/* Dynamic blogs from backend */}
      {blogs.length > 0 && (
        <div className="mt-12 space-y-16 bg-white text-black">
          {blogs.map((blog) => (
            <div key={blog._id} className="max-w-4xl mx-auto text-center">
              {/* Blog Heading */}
              <h2 className="text-5xl font-bold mb-6">{blog.title}</h2>

              {/* Blog Image */}
              {blog.image && (
                <img
                  src={blog.image.startsWith('http') ? blog.image : `http://localhost:5001${blog.image}`}
                  alt={blog.title}
                  className="w-full h-auto rounded-lg mb-6"
                />
              )}

              {/* Blog Paragraphs */}
              {blog.paragraphs &&
                blog.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-lg text-gray-700 mb-4 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EvarsSection;
