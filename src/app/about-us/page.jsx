'use client';

import React, { useEffect, useRef } from 'react';

import UrbanAbout from '@/components/About/UrbanAbout';
import WhatWeDo from '@/components/About/WhatWeDo';
import WhoWeAre from '@/components/About/WhoWeAre';

import Hole from '@/components/About/Hole';
import Test from '@/components/About/Test';

const Page = () => {
  


  return (
    
    <div className="font-telegraf relative">
    
        <UrbanAbout />
        <WhatWeDo />
        <Test/>
   
     
        {/* <Hole/> */}
        {/* <WhoWeAre /> */}
  

    
    </div>
  );
};

export default Page;
