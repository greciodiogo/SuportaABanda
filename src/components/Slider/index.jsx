import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles.css";

import React from "react";

const Slider = ({ children, objectData }) => {
  return (
    <div className="slider">
      <Swiper
        modules={[FreeMode, Pagination]}
        freeMode={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        slidesPerView={3}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          540: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
