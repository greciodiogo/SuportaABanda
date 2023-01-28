import React, { useEffect, useState } from "react";

import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../Profissionals/Profissionals.css";
import { profissionalsData } from "../../data/profissionalsD.js";

import Profissional from "./Profissional/Profissional";
// import PreviewModal from "../PreviewModal/PreviewModal";

const ProfissionalsContainer = () => {
  const [product, setProduct] = useState(profissionalsData);
  const [showPainel, setShowPainel] = useState(false);

  const handlePrevProfissional = (idx) => {
    setProduct(profissionalsData[idx - 1]);
    setShowPainel(true);
  };

  const closepreviewProduct = () => {
    setShowPainel(false);
  };

  const getProducts = () => {
    // dispatch(getAllProfissionals)
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (

<>
      <div className="profissionals" id="programs">
        {/* programs header */}
        <div className="profissionals-header">
          <span className="">Diaristas</span>
        </div>

        <div className="wrapper">
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
            {/* programs-categories */}
            {profissionalsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Profissional data={item} handlePrevProfissional={handlePrevProfissional} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>

      <div className="profissionals" id="programs">
        {/* programs header */}
        <div className="profissionals-header">
          <span className="">Canalizadores</span>
        </div>

        <div className="wrapper">
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
            {/* programs-categories */}
            {profissionalsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Profissional data={item} handlePrevProfissional={handlePrevProfissional} />
              </SwiperSlide>
            )).slice(0,5)}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
      
      
      <div className="profissionals" id="programs">
        {/* programs header */}
        <div className="profissionals-header">
          <span className="">Eletricista</span>
        </div>

        <div className="wrapper">
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
            {/* programs-categories */}
            {profissionalsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Profissional data={item} handlePrevProfissional={handlePrevProfissional} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>


      <div className="profissionals" id="programs">
        {/* programs header */}
        <div className="profissionals-header">
          <span className="">Babás</span>
        </div>

        <div className="wrapper">
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
            {/* programs-categories */}
            {profissionalsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Profissional data={item} handlePrevProfissional={handlePrevProfissional} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>

      <div className="profissionals" id="programs">
        {/* programs header */}
        <div className="profissionals-header">
          <span className="">Jardineiros</span>
        </div>

        <div className="wrapper">
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
            {/* programs-categories */}
            {profissionalsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Profissional data={item} handlePrevProfissional={handlePrevProfissional} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>

      <div className="profissionals" id="programs">
        {/* programs header */}
        <div className="profissionals-header">
          <span className="">Pintores</span>
        </div>

        <div className="wrapper">
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
            {/* programs-categories */}
            {profissionalsData.map((item, index) => (
              <SwiperSlide key={index}>
                <Profissional data={item} handlePrevProfissional={handlePrevProfissional} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
      {/* <PreviewModal product={product} showPainel={showPainel} closepreviewProduct={closepreviewProduct}/> */}
    </>
  );
};

export default ProfissionalsContainer;
