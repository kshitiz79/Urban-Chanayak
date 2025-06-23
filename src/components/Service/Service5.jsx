"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  {
    name: "Integrated Marketing",
    path: "/services/integrated-marketing",
    description:
      "We craft cohesive marketing campaigns that blend traditional and digital channels to maximize reach and impact, driving your brand's growth with precision.",
  },
  {
    name: "Branding & Strategy",
    path: "/services/branding-strategy",
    description:
      "Our team builds compelling brand identities and strategic roadmaps that resonate with your audience and set you apart in competitive markets.",
  },
  {
    name: "Election Management",
    path: "/services/election-management",
    description:
      "We provide end-to-end campaign solutions, from voter outreach to media strategies, ensuring impactful and organized election efforts.",
  },
  {
    name: "Digital & Social Media",
    path: "/services/digital-social-media",
    description:
      "We amplify your online presence with targeted social media campaigns and digital strategies that engage and convert your audience.",
  },
  {
    name: "Paid Promotions",
    path: "/services/paid-promotions",
    description:
      "Our data-driven paid advertising campaigns optimize ROI across platforms like Google Ads and social media, delivering measurable results.",
  },
  {
    name: "Event Management",
    path: "/services/event-management",
    description:
      "From concept to execution, we deliver unforgettable events tailored to your goals, ensuring seamless logistics and memorable experiences.",
  },
  {
    name: "Content Creation and Design",
    path: "/services/content-creation-design",
    description:
      "We produce captivating content and stunning visuals that tell your brand's story and engage your audience across all platforms.",
  },
  {
    name: "PR Management",
    path: "/services/pr-management",
    description:
      "Our PR strategies enhance your brand's reputation through media relations, crisis management, and impactful storytelling.",
  },
  {
    name: "Web Design",
    path: "/services/web-development",
    description:
      "We create responsive, user-friendly websites that combine aesthetic appeal with functionality to elevate your online presence.",
  },
  {
    name: "Audio-Visual Productions",
    path: "/services/audio-visual-productions",
    description:
      "Our high-quality audio-visual content, from videos to podcasts, captivates audiences and strengthens your brand's narrative.",
  },
];

const Service5 = () => {
  let pathname = usePathname() || "";
  // strip trailing slash, if any
  if (pathname !== "/" && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  // now filter out the matching service
  const filteredServices = services.filter(service => service.path !== pathname);

  return (
     <div className="grid bg-[#fdf5ea] text-black grid-cols-1 md:grid-cols-3 gap-20 p-10">
      {filteredServices.map((service, index) => (
        <Link
          href={service.path}
          key={service.name}
          className="service-card border-t border-gray-900 hover:bg-gray-100 transition-colors duration-300"
        >
          <div className="service-card py-10 px-4">
            <div className="service-number text-2xl font-bold text-gray-900">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <h2 className="text-xl font-bold mb-3">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Service5;