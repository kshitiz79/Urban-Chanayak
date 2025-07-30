import React from 'react';

const Section1 = () => {
  return (
    <section className="relative md:pt-44 pt-24 bg-white  text-black scroll-smooth md:px-0 px-8">
    <div className="md:h-full h-[50vh] bg-white font-sans">
      {/* Header Section */}
      <header className="container mx-auto md:py-6 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
      
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-black mt-2 leading-tight">
              Social Media Brand Management for Political Leaders: The Assam Playbook
            </h1>
            <button className="text-gray-600 text-sm bg-gray-100 rounded-full p-2">7 mins</button>
          </div>
        
        </div>
      </header>
      <main className="container mx-auto md:py-6 py-8">
        <div className="relative md:w-full h-[20vh] w-[40vh] md:h-[100vh]  overflow-hidden shadow-lg">
          <img
            src="/blogpage.png" // Replace with actual image URL
            alt="Meg O’Hara in a snowy landscape"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      
      </main>
    </div>
    </section>
  );
};

export default Section1;