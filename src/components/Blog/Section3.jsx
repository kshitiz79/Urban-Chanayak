import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Educational conference"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
            Political Influence on Education
          </h2>
          <p className="text-gray-900 mb-6">
            The BJP-led government drives educational reforms, with NEP 2020 promoting foreign university campuses like the University of Aberdeen in Mumbai by 2026. However, opposition protests over fee hikes and content restrictions highlight political tensions.
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Developments:</h3>
            <ul className="list-disc list-inside text-gray-900 space-y-1">
              <li>NEET UG 2025: 12.36 lakh qualifiers vs. 1.18 lakh MBBS seats</li>
              <li>Disaster resilience courses integrated into higher education</li>
              <li>Selective app blocks raise concerns over information control</li>
            </ul>
          </div>
          <div className="flex ">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;