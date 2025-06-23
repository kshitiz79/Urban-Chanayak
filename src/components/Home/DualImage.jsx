import React from 'react'

const DualImage = () => {
  return (
   <section className="w-full h-auto bg-black  px-10 ">
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