'use client';

import React, { useEffect, useRef } from 'react';

import UrbanAbout from '@/components/About/UrbanAbout';
import WhatWeDo from '@/components/About/WhatWeDo';
import WhoWeAre from '@/components/About/WhoWeAre';
import PosterScrollReveal from '@/components/About/PosterScrollReveal';

const Page = () => {


  return (
    <div className="font-telegraf relative">
    
        <UrbanAbout />
        <WhatWeDo />
        <WhoWeAre />
        <PosterScrollReveal />
    
    </div>
  );
};

export default Page;
