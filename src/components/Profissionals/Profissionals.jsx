import React, { useEffect, useState } from "react";

import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Profissionals.css";
import { profissionalsData } from "../../data/profissionals.js";

import Profissional from "./Profissional/Profissional";
import PreviewModal from "../PreviewModal/PreviewModal";

const Profissionals = () => {
  const [product, setProduct] = useState(profissionalsData);
  const [showPainel, setShowPainel] = useState(false);

  const handlePrevProfissional = (idx) => {
    setProduct(profissionalsData[idx - 1]);
    setShowPainel(true);
    console.log("logggo")
    console.log("clickado >>"+idx)
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
          <span className="stroke-text">Novos</span>
          <span>Profissionais</span>
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
            <div class="swiper-pagination"></div>
          </Swiper>
        </div>
        <div className="seeAllContainer">
          <span className="seeAll">Ver todos</span>
        </div>
      </div>
      <PreviewModal product={product} showPainel={showPainel} closepreviewProduct={closepreviewProduct}/>
    </>
  );
};

export default Profissionals;
