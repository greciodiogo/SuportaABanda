import React from "react";
import { BsTruck, BsCheck, BsHandThumbsUp, BsAlignCenter, BsSafe, BsAppIndicator } from "react-icons/bs";
import "./styles.css";

const AboutCompany = () => {
  return (
    <div className="aboutCompany">
      <h2 className="header">Nossos Valores</h2>
      <div className="row">

      <div className="card">
          <div className="icon">
            <BsHandThumbsUp fill="white" />
          </div>
          <div className="content">
            <h4>Excelência</h4>
          </div>
        </div>
      <div className="card">
          <div className="icon">
            <BsCheck fill="white" />
          </div>
          <div className="content">
            <h4>Comprometimento</h4>
          </div>
        </div>
      <div className="card">
          <div className="icon">
            <BsAppIndicator fill="white" />
          </div>
          <div className="content">
            <h4>Flexibilidade</h4>
          </div>
        </div>
      <div className="card">
          <div className="icon">
            <BsSafe fill="white" />
          </div>
          <div className="content">
            <h4>Confiabilidade</h4>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutCompany;
