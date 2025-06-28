'use client';

import React, { useState } from 'react';
import Loader from '@/components/Global/Loader/Loader';
import Creative from '@/components/About/Creative';
import ScrollRevealPanel from '@/components/About/ScrollRevealPanel';
import SuccessStories from '@/components/About/SuccessStories';
import UrbanAbout from '@/components/About/UrbanAbout';
import HeroSection from '@/components/About/HeroSection';
import TeamSection from '@/components/About/TeamSection';
import PosterScrollReveal from '@/components/About/PosterScrollReveal';
import WhoWeAre from '@/components/About/WhoWeAre';

const Page = () => {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <div className="font-telegraf relative">
      {/* Always render first component behind loader */}
      <UrbanAbout />

      {/* Render rest only after loader */}
      {loaderDone && (
        <>
       
          <Creative />
          {/* <SuccessStories /> */}
          <PosterScrollReveal/>
          <WhoWeAre/>
       
        </>
      )}

      {/* Loader always above everything */}
      {!loaderDone && (
        <Loader onLoadComplete={() => setLoaderDone(true)} duration={2000} />
      )}
    </div>
  );
};

export default Page;
