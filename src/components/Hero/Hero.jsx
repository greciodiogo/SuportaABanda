import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import {Link} from 'react-scroll'
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  const router = useNavigate()

  const handleClickDescover = () => {
    router('/home')
  }
  const handleClickAbout = () => {
    router('/about')
  }


  return (
    <div className="hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>O melhor suporte para o seu lar</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Encontre </span>
            <span>O</span>
          </div>
          <div>
            <span>Profissional ideal </span>
          </div>
          <div>
            <span>
              A suporta a banda auxilia-te a encontrar de forma rápida e eficaz
              profissionais para a gestão e manutenção do seu lar
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={5} start={0} delay={4} preFix="+" />
            </span>
            <span>Diaristas</span>
          </div>
          <div>
            <span>
              <NumberCounter end={33} start={28} delay={2} preFix="+" />
            </span>
            <span>Colaboradores</span>
          </div>
          <div>
            <span>
              <NumberCounter end={30} delay={2} preFix="+" />
            </span>
            <span>Contratações</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn" onClick={handleClickDescover}>Descobrir</button>
          <a className="btn" onClick={handleClickAbout} >Saber Mais</a>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
        <button className="btn">
          <Link to = 'join-us' smooth={true} spy={true}>
          Entrar
          </Link>
          </button>

        <img className="hero-image" src={hero_image} alt="" />

        {/* calories */}
        <motion.div
          initial={{ right: "10rem" }}
          whileInView={{ right: "17rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Apoio</span>
            <span>100 %</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
