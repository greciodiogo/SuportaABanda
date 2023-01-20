import React from "react";
import image1 from "../../assets/cover.jpg";
import image2 from "../../assets/images.jfif";
import image3 from "../../assets/perfuração.jpg";
import image4 from "../../assets/black_maid.jpg";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from "../../assets/tick.png";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={image4} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image1} alt="" />
      </div>
      <div className="right-r">
        <span>Algumas razões</span>
        <div>
          <span className="stroke-text">Para ter a  </span>
          <span>Nossa parceria</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Mais de 100+ profissionais verificados disponiveis</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Com alguns cliques contrate o seu auxiliador do lar</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Negociação directamente com o profissional</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Plataforma totalmente gratuita</span>
          </div>
        </div>
        <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>
        {/* <div className="partners">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
