import ServiceSection from '@/components/Service/ServiceSection';
import { servicesData } from '@/data/servicesData';
import React from 'react'

const page = () => {
  return (
    <div>
      {servicesData.map((service) => (
        <ServiceSection
          key={service.id}
          title={service.title}
          bulletPoints={service.bulletPoints}
          description={service.description}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          sectionClassName={service.sectionClassName}
          leftContentClassName={service.leftContentClassName}
          rightImageClassName={service.rightImageClassName}
          titleClassName={service.titleClassName}
          bulletListClassName={service.bulletListClassName}
          descriptionClassName={service.descriptionClassName}
          useImg={service.useImg}
        />
      ))}
    </div>
  )
}

export default page;