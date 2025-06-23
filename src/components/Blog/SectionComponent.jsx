import React from 'react';

const SectionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Section 1: Une réponse clé-en-main */}
   <section className="w-full max-w-7xl p-6 mb-8 flex flex-col items-center py-20">
 <h2 className="text-black text-3xl font-bold  inline-block px-4 py-2 rounded-full mx-auto mb-10">
          Critical Challenges
        </h2>
  <p className="text-gray-900 text-base mb-4">
          As of June 19, 2025, India’s education sector faces significant challenges with far-reaching impacts on its youth. Key issues include a disparity in literacy rates—Kerala at 95.3% versus northern states’ struggles due to poverty—and the pressure of NEET UG 2025, where 12.36 lakh qualifiers compete for just 1.18 lakh MBBS seats. Political initiatives aim to address these through policy reforms and increased access.
        </p>
  <div className="flex justify-center">
   {/* <button className="bg-orange-600 text-white px-4 py-2 rounded-full mt-10 flex items-center">
          Explore Our Framework <span className="ml-2">→</span>
        </button> */}
  </div>
</section>

      {/* Section 2: Des enjeux importants */}
      <section className="w-full max-w-7xl p-6 mb-8  flex items-center">
        <div className="w-2/3">
          <h2 className="text-black text-xl font-bold  inline-block   mb-10 text-center">
        A Comprehensive Solution
      </h2>
         <p className="text-gray-900 text-base mb-4">
        This is why we’ve developed a transformative educational framework: a solution that is comprehensive and adaptable, with simple, autonomous, and accessible tools for all. We aim to engage key stakeholders—government bodies, educators, and industry leaders—to empower India’s youth with relevant skills and knowledge under the National Education Policy (NEP) 2020.
      </p>
        </div>
        <div className="w-1/3 pl-4">
          <div className="bg-pink-200 rounded-lg overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Child with backpack" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Section 3: Qu'est-ce que l'EVARS ? */}
      <section className="w-full max-w-7xl p-6 flex items-center">
          <div className="w-1/3 pr-4">
          <div className="bg-pink-200 rounded-lg overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Group of children" className="w-full h-auto" />
          </div>

        </div>
        <div className="w-2/3 items-end pl-4">
         <h2 className="text-black text-xl font-bold  inline-block mb-10 text-right ">
        Political Dynamics & Future
      </h2>
          <p className="text-gray-900 text-base mb-4">
        As of 12:42 AM IST, June 19, 2025, political dynamics shape India’s education. The government’s Mumbai Rising project and Intellipaat School of Technology reflect ambition, while opposition protests over fee hikes and content restrictions highlight tensions. The goal is to empower 1.4 billion people through education amidst regional disparities.
      </p>
        </div>
      
      </section>
    </div>
  );
};

export default SectionComponent;  