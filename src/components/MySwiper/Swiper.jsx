import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const MySwiper = ({children}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={4}
      pagination={{ clickable: true }}
      navigation
    >
        <SwiperSlide>
          {children}
        </SwiperSlide>
    </Swiper>
  )
}