
import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import "./CustomSwiper.scss"
import { Pagination } from "swiper";
import "swiper/scss/pagination";
import 'swiper/scss';
const CustomSwiper = ({ slides}) => {
    const breakpoints={
        768:{
            slidesPerView:2,
        },
        375:{
            slidesPerView:1,
            
        },
        1920:{
            slidesPerView:3
        },
        1440:{
            slidesPerView:3
        },
        960:{
            slidesPerView:3
        }
    }
  return (
    <>
    <Swiper className='main__slider'
    modules={[Pagination]}
    breakpoints={breakpoints}
    spaceBetween={30}
    slidesPerView={3}
    loop={true}
    pagination={{
        clickable: true,
      }}

    
    >
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}

        </Swiper>
        <div className="swiper-pagination "></div>
    </>
    
  );
};

export default CustomSwiper;
