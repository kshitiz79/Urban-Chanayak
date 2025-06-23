"use client"
import React, { useState } from 'react';

const ContactUs = () => {
  const [selectedServices, setSelectedServices] = useState([]);

    const services = [
    "Branding",
    "Social Media",
        "SEO",
            "Web Design",
    "Content Creation & Marketing",
        "Performance Media",
       "Integrated Campaigns",
    "Ad Film/Video Production",

    "Website Transformation",
        "IP Creation",
    "Mobile App Development & UI/UX",
    "CRM/Sales Pipeline Development",
    "Influencer Marketing",
      "Growth via Media Buying",

    "Email & SMS Marketing Automation",

  
    "Social Listening & ORM",

    "Consumer & Market Research",
 
    "Others",
  ];

  // Handle service selection
  const handleServiceClick = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      if (selectedServices.length < 10) {
        setSelectedServices([...selectedServices, service]);
      }
    }
  };

  // Han
  return (
    <div className="bg-orange-600 text-white  flex flex-col ">


    <div className="max-w-full rounded-t-[10rem] mt-60 text-center py-32 bg-white text-black">
        {/* Header */}
        <h1 className="text-[6rem]   font-extrabold leading-36 text-center  mb-6">Let's Connect and Grow</h1>


<div className='flex flex-row mx-auto items-center justify-center space-x-8'>
  



<div className='flex-col max-w-3xl mx-auto space-y-16 '>


 <div className="bg-white p-8 rounded-xl  w-full max-w-3xl mx-auto">
                   <img src="/contactus1.png"  className='w-[31rem]  rounded-2xl'/>
        </div>


 <div className="bg-white p-8 rounded-xl  w-full max-w-3xl mx-auto">
                   <img src="/contactus2.png"  className='w-[31rem]  rounded-2xl'/>
        </div>
</div>



        <form className=" p-8 rounded-xl w-full max-w-md mx-auto">
         <div className="mb-6">
  <input
    type="text"
    name="name"
    placeholder="First & Last Name"
    className="w-full p-3 border-b-1 border-gray-300  focus:border-blue-900 focus:outline-none"
  />
</div>

  <div className="mb-6">
  <input
    type="text"
    name="name"
    placeholder="Your Organization's Name"
    className="w-full p-3 border-b-1 border-gray-300  focus:border-blue-900 focus:outline-none"
  />
</div>
<div className="mb-6">
  <input
    type="number"
    name="number"
    placeholder="Number"
    className="w-full p-3 border-b-1 border-gray-300  focus:border-blue-900 focus:outline-none"
  />
</div>
<div className="mb-6">
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full p-3 border-b-1 border-gray-300  focus:border-blue-900 focus:outline-none"
  />
</div>
<div className="mb-6">
  <textarea
    name="project"
    placeholder="About Your Project"
    className="w-full p-3 border-b-1 border-gray-300  h-32 focus:border-blue-900 focus:outline-none"
  ></textarea>
</div>

<div className="">
              <label className="block text-sm font-medium text-orange-950">
                Which services are you interested in? (Select up to 10)
              </label>
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-7">
                {services.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  const isDisabled = !isSelected && selectedServices.length >= 10;
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleServiceClick(service)}
                      disabled={isDisabled}
                      className={`px-3 py-1 rounded-full text-sm border-2 transition-colors duration-200 
                        ${isSelected ? 'bg-sky-500 text-white' : 'bg-white text-black'}
                        ${isDisabled && !isSelected ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-500 hover:text-white'}
                        border-black`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
              {selectedServices.length >= 10 && (
                <p className="mt-2 text-sm text-red-600">You can select up to 10 services.</p>
              )}
            </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-10 py-3 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </button>
        </form>


   



</div>




      </div>



    </div>
  );
};

export default ContactUs;
