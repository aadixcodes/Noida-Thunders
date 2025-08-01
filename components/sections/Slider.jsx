'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

// ⚠️ Fix import if needed (see note below)
import { assets } from '@/public/assets/assests';

const Slider = () => {
  return (
    <div className="w-full h-70 sm:h-[70vh] md:h-[85vh] lg:h-screen relative font-[heading-1]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide className="relative w-full h-full">
            <Image
              src={assets.Banner1}
              alt="Banner 1"
              fill
              className="object-cover"
              priority
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="relative w-full h-full">
            <Image
              src={assets.Banner2}
              alt="Banner 2"
              fill
              className="object-cover"
              priority
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="relative w-full h-full">
            <Image
              src={assets.Banner3}
              alt="Banner 3"
              fill
              className="object-cover"
              priority
            />
          </SwiperSlide>
        </Swiper>
    </div>

  );
};

export default Slider;