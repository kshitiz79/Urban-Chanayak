'use client';

import React, { useEffect, useRef } from 'react';

import UrbanAbout from '@/components/About/UrbanAbout';
import WhatWeDo from '@/components/About/WhatWeDo';
import WhoWeAre from '@/components/About/WhoWeAre';
import PosterScrollReveal from '@/components/About/PosterScrollReveal';
import SuccessStories from '@/components/About/SuccessStories';
import ScrollRevealPanel from '@/components/About/ScrollRevealPanel';
import Hole from '@/components/About/Hole';

const Page = () => {
  


  return (
    
    <div className="font-telegraf relative">
    
        <UrbanAbout />
        <WhatWeDo />
   
        <WhoWeAre />
        <Hole/>
  

    
    </div>
  );
};

export default Page;
