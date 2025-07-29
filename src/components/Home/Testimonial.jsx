import React from 'react';

const Testimonial = () => {
  return (
    <div className="flex md:flex-col flex-row items-center py-24 md:px-10 px-2 bg-white">
      <div className="border-4 border-black rounded-2xl p-8 text-center">
        <p className="text-xl font-semibold text-gray-950 text-left md:text-3xl">
          “Urban Chanakya brought strategic clarity and creative precision to our political campaign. <br/> Their deep understanding of public sentiment, combined with cutting-edge execution, helped us not only amplify our message but also build trust at the grassroots level. Their team’s agility, innovation, and sharp messaging turned our vision into real on-ground momentum — from digital outreach to event execution, every detail was thoughtfully aligned with the larger goal. <br/> We didn’t just run a campaign; we created a movement — thanks to their unwavering commitment and strategic brilliance.”
        </p>
        <p className="text-gray-300 text-4xl font-semibold text-left mt-40 hover:text-orange-500">Welcome to Urban Chanakya </p>
      </div>
    </div>
  );
};

export default Testimonial;
