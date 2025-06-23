import React from 'react';
export const evarsCards = [
  { title: "Educational Institutions", description: "In France, the National Education system has mandated three sessions per year per age group in educational institutions since 2001." },
  { title: "Parents", description: "As primary educators, they play a key role in passing down values, fostering dialogue, and supporting their children in their questions." },
  { title: "Educators", description: "Interacting with young people daily, they support their reflection and play an essential role in fostering a climate of trust and safety for minors." },
  { title: "Experts", description: "Professionals in health, psychology, pedagogy, law, etc., provide valuable expertise to inform and address the sometimes complex issues of EVARS." },
  { title: "Society", description: "Public authorities that establish legal frameworks, the media, associations, etc., play a key role in raising awareness among young people about various issues surrounding EVARS." },
];

const Section2 = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-black mb-10 text-center">
          Who plays a role in <span className="relative">
    
            <span className="">EVARS</span>
          </span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
          {evarsCards.slice(0, 2).map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-md hover:border-2 border-orange-600">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {evarsCards.slice(2).map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-md hover:border-2 border-orange-600">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;