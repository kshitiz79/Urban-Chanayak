"use client";
import Image from "next/image";
import React from "react";
import Section3 from "./Section3";

const NextSection = () => {
  return (
    <div className="relative bg-white w-full h-[100vh]">
      {/* Pinned Layout Section */}
         <section className="sticky top-0 w-full bg-white py-10 bg-white text-black w-full min-h-screen flex flex-col md:flex-row">
           {/* Left content */}
           <div className="w-full md:w-1/2 px-6 md:px-16 py-16 flex flex-col justify-center">
             <h1 className="text-5xl font-bold mb-6">Integrated Marketing</h1>
     
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
           <div className="w-full md:w-1/2 relative min-h-[100vh] md:min-h-full">
             <Image
               src="https://cdn.prod.website-files.com/656a0c59bc8ad4e5fa92b68e/68501955fbec5c4360eed01d_Frame%2022290.webp" // Replace with your image path
               alt="Branding Billboard"
               fill
               className="object-cover"
             />
           </div>
         </section>

      {/* Next Section scrolling over the sticky right half */}
      <section className="w-full h-screen bg-black text-white flex items-center justify-center text-3xl font-bold z-20 relative">
      <Section3/>
      </section>
    </div>
  );
};

export default NextSection;
