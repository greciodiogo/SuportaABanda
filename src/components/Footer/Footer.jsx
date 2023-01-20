import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
            {/* <img src={Logo} alt="" /> */}
            <h2 className="img">🛠 Suporta a Banda</h2>
      </div>
      <div className="blur blur-f"></div>
        </div>
      <div className="blur blur-f"></div>
    </div>
  );
};

export default Footer;
