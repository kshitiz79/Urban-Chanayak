"use client";

import Image from "next/image";
import React from "react";

const ServiceSection = ({
  title,
  bulletPoints,
  description,
  imageSrc,
  imageAlt,
  sectionClassName = "",
  leftContentClassName = "",
  rightImageClassName = "",
  titleClassName = "",
  bulletListClassName = "",
  descriptionClassName = "",
  useImg = false
}) => {
  return (
    <section className={sectionClassName}>
      {/* Left content */}
      <div className={leftContentClassName}>
        <h1 className={titleClassName}>
          {title}
        </h1>

        <ul className={bulletListClassName}>
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className={descriptionClassName}>
          <p>{description}</p>
        </div>
      </div>

      {/* Right image */}
      <div className={rightImageClassName}>
        {useImg ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
    </section>
  );
};


export default ServiceSection;