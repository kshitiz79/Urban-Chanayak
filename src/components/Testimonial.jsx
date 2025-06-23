'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rachel Jules',
    date: '5 Apr 2023',
    review:
      "The most comfortable Nike’s I’ve worn in the past couple of years has been the 32s. These have surpassed that",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Doe',
    date: '7 Apr 2023',
    review:
      "I love a good-looking shoe, but comfort is where it’s at for me. I can’t say how well they are for playing ball in, but for everyday wear, ",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Samantha Lee',
    date: '10 Apr 2023',
    review:
      "I was skeptical at first, but these exceeded my expectations! The perfect blend of comfort and style. Highly recommended!",
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    name: 'Michael Smith',
    date: '12 Apr 2023',
    review:
      "Absolutely love these shoes! They fit perfectly, and the design is stunning. Will definitely buy again Absolutely love these shoes! They fit perfectl.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'David Warner',
    date: '15 Apr 2023',
    review:
      "Amazed by the comfort level! The best purchase I've made recently. The quality and fit are top-notch! Absolutely love these shoes! They",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="
        bg-gradient-to-b
        from-gray-50
        to-gray-100
        py-28
        relative
        overflow-visible 
      "
    >
      <div className="w-full  px-12 text-center text-black relative z-10 overflow-visible">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          WHAT OUR REVIEWS SAY
        </motion.h2>

        <div className="mx-6 overflow-visible">
          <Swiper
            className="overflow-visible"
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
             <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: index * 0.2 }}
  className="
    bg-white
    text-gray-900
    p-6
    rounded-3xl
    border-2
    border-gray-900
    relative
    flex
    flex-col
    justify-between
  "
  style={{ marginBottom: '12%'  }}
>
                  <div className="flex items-center space-x-2 text-yellow-500">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 my-4">{testimonial.review}</p>
                  <div className="flex items-center space-x-3 mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.date}</p>
                    </div>
                  </div>
                  <FaQuoteRight className="absolute bottom-4 right-4 text-gray-300 text-2xl" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
