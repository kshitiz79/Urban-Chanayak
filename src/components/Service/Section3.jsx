"use client";
import Image from "next/image";
import React from "react";
import Section4 from "./Section4";

const NextSection = () => {
  return (
    <div className="relative bg-white w-full">
      {/* Pinned Layout Section */}
      <section className="w-full min-h-screen flex flex-col md:flex-row sticky top-0">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center text-black z-10 relative">
          <h1 className="text-5xl font-bold mb-6">Digital & Social Media</h1>

          <ul className="text-sm font-semibold space-y-2 mb-6">
            <li>
              • <span className="font-bold">Webflow / Shopify</span> &nbsp;&nbsp;
              • <span className="font-bold">Creative Front-End</span> &nbsp;&nbsp;
              • <span className="font-bold">UX/UI</span>
            </li>
            <li>
              • Arborescence &nbsp;&nbsp;
              • SEO &nbsp;&nbsp;
              • Responsive Mobile &nbsp;&nbsp;
              • Sur-mesure
            </li>
          </ul>

          <div className="text-gray-800 text-base leading-relaxed border-t border-gray-300 pt-6 space-y-4">
            <p>
              Un site n’est pas qu’une vitrine : c’est une expérience. Je conçois
              des sites sur-mesure, pensés à la fois pour l’utilisateur (UX),
              l’esthétique (UI) et l’interaction; animations, micro-effets,
              storytelling fluide.
            </p>
            <p>
              Les sites vitrines sont réalisés exclusivement sur Webflow pour une
              liberté totale de création. Pour les sites e-commerce, je travaille
              sur Shopify.
            </p>
          </div>

          <div className="pt-6">
            <a href="#" className="text-black font-medium underline underline-offset-4">
              CE SERVICE M’INTÉRESSE
            </a>
          </div>
        </div>

        {/* Right Sticky Image + Overlay */}
        <div className="w-full md:w-1/2">
          <div className="sticky top-0 h-screen w-full">
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src="https://cdn.prod.website-files.com/656a0c59bc8ad4e5fa92b68e/68501955fbec5c4360eed01d_Frame%2022290.webp"
                alt="Silhouette Background"
                fill
                className="object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-10 shadow-lg max-w-xs w-full text-center">
                <Image
                  src="/overlay-image.jpg"
                  alt="Enma"
                  width={300}
                  height={400}
                  className="object-cover mx-auto"
                />
                <p className="text-sm text-black mt-3">
                  <strong>ENMA</strong> | STYLISTE MODÉLISTE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section scrolling over the sticky right half */}
      <section className="w-full h-screen bg-black text-white flex items-center justify-center text-3xl font-bold z-20 relative">
      <Section4/>
      </section>
    </div>
  );
};

export default NextSection;
