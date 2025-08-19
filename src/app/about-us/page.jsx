'use client';

import React, { useEffect, useRef } from 'react';

import UrbanAbout from '@/components/About/UrbanAbout';
import WhatWeDo from '@/components/About/WhatWeDo';



import Test from '@/components/About/Test';
import TeamSection from '@/components/About/TeamSection';


const Page = () => { 
  


  return (
    
    <div className="font-telegraf relative">
    
        <UrbanAbout />
        <WhatWeDo />
        <Test/>
        <TeamSection/>
    </div>
  );
};

export default Page;
