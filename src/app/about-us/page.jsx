import Creative from '@/components/About/Creative';
import SuccessStories from '@/components/About/SuccessStories';
import UrbanAbout from '@/components/About/UrbanAbout'
import React from 'react'

export const page = () => {
  return (
    <div className='font-telegraf'>
      <UrbanAbout/>
      <Creative/>
      <SuccessStories/>
    </div>
  )
}
 export default page;