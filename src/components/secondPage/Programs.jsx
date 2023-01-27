import React from "react";
import "./Programs.css";

import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
import { motion } from "framer-motion";
const Programs = () => {
  return (
    <div className="Programs" id='programs'>

        {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Desfrute Dos</span>
        <span>Variados</span>
        <span className="stroke-text">Tipos de Serviços</span>
      </div>

    
      <div className="wrapper">
      {/* programs-categories */}
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
      <div className="program-categories">
        {programsData.map((program,index)=>(
          <SwiperSlide key={index}>
            <div
            whileHover={{background: 'var(--planCard)', cursor: 'pointer'}}
            transition={{type: 'spring'}}
            className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <span>Explorar</span>
                    <img src={RightArrow} alt="" />
                </div>
            </div>
            </SwiperSlide>
        ))}
        <div class="swiper-pagination"></div>
    </div>
          </Swiper>
    </div>
    </div>
  );
};

export default Programs;
