import AudioVideo from '@/components/Service/AudioVideo';
import Branding from '@/components/Service/Branding';
import ContentCreation from '@/components/Service/ContentCreation';
import ElectionManagement from '@/components/Service/ElectionManagement';
import EventManagement from '@/components/Service/EventManagement';
import HeroSection from '@/components/Service/HeroSection'
import PaidPromotion from '@/components/Service/PaidPromotion';
import PRManagement from '@/components/Service/PRManagement';
import WebDesign from '@/components/Service/WebDesign';



import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection/>

        <Branding/>
        <ElectionManagement/>
        <PaidPromotion/>
        <WebDesign/>
        <PRManagement/>
        <AudioVideo/>
        <ContentCreation/>
        <EventManagement/>
      
    </div>
  )
}

export default page;