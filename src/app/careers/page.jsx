import ContactSection from '@/components/Career/ContactSection'
import HeroSection from '@/components/Career/HeroSection'
import VacanciesSection from '@/components/Career/VacanciesSection'
import WhyJoinSection from '@/components/Career/WhyJoinSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <WhyJoinSection/>
        <VacanciesSection/>
        <ContactSection/>
    </div>
  )
}

export default page