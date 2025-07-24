import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='relative'>


        <section>  <section className="relative z-10 bg-white pt-40 px-6 pb-10">
  <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10">
    
    {/* Left side: Heading + Video */}
    <div className="flex flex-col md:w-2/3">
      <h2 className="text-5xl md:text-8xl font-extrabold text-black uppercase whitespace-nowrap drop-shadow-[1px_1px_0_black]">
        what we do
      </h2>

      <video
        src="/hero.mp4"
        className="mt-6 w-full max-w-[328px]"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>

    {/* Right side: Paragraph */}
    <div className="md:w-2/3 flex md:justify-center">
      <p className="text-black px-2 md:px-6 py-2 text-xl ">
      At Urban Chanakya, we go beyond providing services — we work to engineer Impact.
Whether it’s crafting winning political campaigns, shaping public opinion, building powerful brand identities, or integrating cutting-edge technology into outreach — we don’t just ask what can we do for you — we ask what can’t we.

      </p>
    </div>
  </div>
</section>

        </section>
    </div>
  )
}

export default WhatWeDo