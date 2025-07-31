import React from "react";

const Testimonial = () => {
  return (
    <div className="flex md:flex-col flex-row items-center py-24 md:px-10 px-2 bg-white">
      <div className="border-4 border-black rounded-2xl p-8 text-center">
        <p className="text-xl font-semibold text-gray-950 text-left md:text-3xl">
          <i> Strategy. Storytelling. Impact.</i> <br /> <br />
          <span className="">
          Urban Chanakya is North East’s pioneering political consultancy and
          branding agency rooted in the heart of Assam. Blending ancient wisdom
          with modern tactics, we craft winning narratives for leaders, parties,
          and brands that seek to move minds and mobilize masses. From election
          war rooms to viral social media campaigns, from grassroots activation
          to national PR blitzes, critical software development to
          high-intensity live coverages, and from deep grassroots mobilization
          to time-sensitive IEC (Information, Education, Communication)
          campaigns, we handle complexity with precision and speed - we don’t
          just manage perceptions, we shape destinies. With a sharp eye for
          detail and a relentless drive for impact, Urban Chanakya turns
          strategy into success. <br /> <br /> <span className="text-orange-600">Where ideas meet execution, and campaigns
          become movements.</span>
          </span>
        </p>
        <p className="text-gray-300 text-4xl font-semibold text-left mt-30 hover:text-orange-500">
          Welcome to Urban Chanakya{" "}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
