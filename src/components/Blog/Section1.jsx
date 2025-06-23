import React from 'react';

const Section1 = () => {
  return (
    <section className="pt-14 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center h-[60vh]">
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6  leading-3">
            <span>Education in</span>
            <span className="relative mx-2">
              <span className=""></span>
              <span className="relative ">Modern</span>
            </span>
            <span className="relative mx-2">
              <span className=""></span>
              <span className="relative ">India</span>
            </span>
          </h1>
          <h2 className="text-3xl font-semibold mb-4">
            Shaping the <span className="relative">

              <span className="relative ">Future</span>
            </span>
          </h2>
          <p className="text-gray-900 leading-relaxed pr-6" >
            India’s education system is undergoing a transformative shift under political leadership, aiming to build a knowledge hub by 2047. The National Education Policy (NEP) 2020, led by PM Narendra Modi, emphasizes global collaboration and skill development to empower the youth.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Indian students in classroom"
            className="rounded-lg shadow-lg h-60 border-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;