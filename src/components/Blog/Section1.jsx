import React from 'react';

const Section1 = () => {
  return (
    <section className="pt-44 bg-white text-black scroll-smooth">
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-red-600 text-sm font-medium">WORDS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-2 leading-tight">
              Social Media Brand Management for Political Leaders: The Assam Playbook
            </h1>
            <button className="text-gray-600 text-sm bg-gray-100 rounded-full p-2">7 mins</button>
          </div>
        
        </div>
      </header>
      <main className="container mx-auto py-6">
        <div className="relative w-full h-[70vh] md:h-[100vh] xl:h-[100vh] lg:h-[100vh] overflow-hidden shadow-lg">
          <img
            src="/blogpage.png" // Replace with actual image URL
            alt="Meg O’Hara in a snowy landscape"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-500 mt-8 justify-between">
          <div className='flex flex-col'> 
            <p>Published <br />
            <span className='text-red-500'>
               4.25.24</span></p>
            </div>
            <div className='flex flex-col'> 
            <p>Category <br />
            <span className="text-red-600">Ambassadors</span>
               </p>
            </div>
            <span className="ml-2">SHARE THIS STORY</span>
          </div>
      </main>
    </div>
    </section>
  );
};

export default Section1;