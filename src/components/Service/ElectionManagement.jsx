// components/BrandingSection.tsx

"use client";

import Image from "next/image";
import React from "react";

const ElectionManagement = () => {
  return (
    <section className="sticky top-0 w-full h-[100vh] bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
      {/* Left content */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Election Management</h1>

        <ul className="text-sm font-semibold space-y-2 mb-6">
          <li>• Stratégie de marque &nbsp;&nbsp; • Identité Visuelle &nbsp;&nbsp; • Charte Graphique</li>
          <li>• Réseaux Sociaux &nbsp;&nbsp; • Brand Book &nbsp;&nbsp; • Assets</li>
        </ul>

        <div className="text-gray-800 text-base leading-relaxed border-t border-gray-300 pt-6 space-y-4">
          <p>
            Créer une marque qui a du sens, c’est d’abord comprendre ce qu’elle incarne.
            Le service de branding repose sur une analyse stratégique approfondie des fondations de votre marque : 
            positionnement, mission, vision, cible. Ce travail donne naissance à un univers visuel sur-mesure —
            une identité forte, cohérente et alignée avec vos ambitions.
          </p>
          <p>
            Ce service s’adresse autant aux marques qui se lancent qu’à celles qui souhaitent évoluer et affirmer une nouvelle image.
          </p>
        </div>

        <div className="pt-6">
          <a href="#" className="text-black font-medium underline underline-offset-4">
            CE SERVICE M’INTÉRESSE
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full -m-10">
        <Image
          src="https://content.jdmagicbox.com/comp/service_catalogue/outdoor-election-management-software-in-pan-india-for-windows-022pxx22.xx22.221015143228.k4e7-i8xg0l8.jpg" // Replace with your image path
          alt="Branding Billboard"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ElectionManagement;
