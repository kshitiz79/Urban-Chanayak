import React from 'react'
import { FaLock } from "react-icons/fa";
import TestimonialSection from '../Testimonial';
import Image from 'next/image';
import { FaDownLong } from "react-icons/fa6";
const ManyDivs = () => {
  return (
    <section className='bg-black p-10 py-16'>


<div className='flex flex-row gap-5'>



    <div className='w-1/4 h-[30vh]' >
    <div className='flex flex-col bg-white rounded-3xl justify-center ' >
   <div className=" p-20 py-20 items-center justify-center ">
      <FaLock className="text-[10rem] text-black" />
        
 
    </div>
     <p className='text-black top-0 px-5 justify-center items-center mb-3'>Lorem. nmk ipsum dolor sit amet consectetu t Lorem ipsum dolor sit amet consectetu t Lorem ipsum dolor sit amet consectetu t Lorem ipsum dolor sit amet consectetu t. Lorem ipsum dolor sit amet consectetu fghjkfghj fgh dfgh ghjk hjk nm</p>
    </div>





   <div className='flex flex-col bg-white rounded-3xl justify-center mt-3 ' >
   <div className=" p-20 items-center justify-center ">
      <FaLock className="text-[10rem] text-black" />
        
 
    </div>
     <p className='text-black top-0 px-5 justify-center items-center mb-3'>Lorem ipsum dolor sit amet consectetu t Lorem ipsum dolor sit amet consectetu t Lorem ipsum dolor sit amet consectetu t Lorem ipsum dolor sit amet consectetu tLorem ipsum dolor sit amet consectetu  </p>
    </div>



    </div>


    <div className='3/4 flex flex-col justify-center items-center'>


    <div className='bg-white p-10  w-[73vw] rounded-3xl py-20'>
<h2 className='text-black text-8xl'>dfghuioklpjhgfchjklkjhg</h2>

<p className='underline mt-3 text-black'> hshjxbdd dndm dwm, </p>
<p className='mt-3 text-black'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae libero tempore praesentium at mollitia saepe error cupiditate dolorum eaque nobis, itaque quam officia consequatur dolorem unde consequuntur maxime assumenda? Recusandae.  consequuntur maxime assumenda? Recusandae.</p>
    </div>




    <div className=' flex flex-row gap-2'>

        <div className='  mt-3 flex-col  w-[60vw]'>
            <div className='bg-white p-9 rounded-3xl'>


<div className='flex flex-1 w-full gap-8'> <img src="./Frame-7.jpg" className='rounded-full h-28 w-28'/>
<img src="./Frame-7.jpg" className='rounded-full h-28 w-28'/>
<img src="./Frame-7.jpg" className='rounded-full h-28 w-28'/>
<img src="./Frame-7.jpg" className='rounded-full h-28 w-28'/>
<img src="./Frame-7.jpg" className='rounded-full h-28 w-28'/>
  
  
  
  
  </div>
  <p className='mt-5 text-black'>dfghjkl;kjhgfdghjkl;'lkjhgf</p>

   <p className=' text-black'>Readymag offers a full library of flexible presentation dummies, all available for free. You can also turn any of your projects into a template.</p>



            </div>
            <div className='bg-white p-12 rounded-3xl mt-3 flex-col   text-black border-black gap-1'>



   <div className='flex  font-bold '>  
<div className='px-14 py-3 border-4 text-3xl  rounded-full'>Presentation</div>
<div className='px-14 py-3 border-4 text-3xl rounded-full'>Landing Page</div>
</div>         


<div className='flex  '>
<div className='px-10 py-3 border-4 text-3xl rounded-full'>Editorial</div>
<div className='px-10 py-3 border-4 text-3xl rounded-full'>Portfolio</div>
<div className='px-10 py-3 border-4 text-3xl rounded-full'>E-Commerce</div>


</div>




<p className='mt-4'>Use templates or create your own</p>
<p>Readymag offers a full library of flexible presentation dummies, all available for free. You can also turn any of your projects into a template.</p>
            </div>



        </div>


      <div className='bg-white p-4 mt-3 w-1/3 rounded-3xl flex flex-col items-center justify-center'>
  <div className="flex flex-col items-center text-center">
 
    <FaDownLong className="text-[10rem] h-[24rem] text-black mx-auto" />
    <p className='mt-1 font-semibold  text-black'>Use templates or create your own</p>
    <p className='text-sm px-4 text-black'>
      Readymag offers a full library of flexible presentation dummies, all available for free. You can also turn any of your projects into a template.
    </p>
  </div>
</div>






    </div>


















    </div>



</div>




    </section>
  )
}

export default ManyDivs