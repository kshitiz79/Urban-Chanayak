import React from 'react'

const DualImage = () => {
  return (
    
   <section className="w-full h-auto bg-black py-10 px-10 ">
    {/* <h1 className='text-4xl text-center font-bold py-24'>Our diverse projects, from environmental <br />
    initiatives to educational programs</h1> */}
  <div className="flex flex-row justify-between gap-6">
    <div className="w-[50%] h-full rounded-3xl">
      <img src="/Frame-6.jpg" alt="Nature" className="w-full h-auto rounded-3xl" />
    </div>

    <div className="w-[50%] h-full rounded-3xl">
      <img src="/Frame-7.jpg" alt="Nature" className="w-full h-auto rounded-3xl" />
    </div>
  </div>
  
</section>

  )
}

export default DualImage