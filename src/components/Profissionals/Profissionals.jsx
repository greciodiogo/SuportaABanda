import React from "react";
import "./Profissionals.css";
import character from '../../assets/images.jfif';
import character4 from '../../assets/perfuração.jpg';
import character5 from '../../assets/eletricista.webp';
import character6 from '../../assets/segurança2.jpg';
import { motion } from "framer-motion";
const Profissionals = () => {
  return (
    <div className="profissionals" id='programs'>

        {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Novos</span>
        <span>Profissionais</span>
      </div>

      {/* programs-categories */}
      <div className="wrapper">
            <motion.div
            transition={{type: 'spring'}}
            className="profissional">
                <div className="picture">
                  <img className="characterPicture" src={character6} alt={character6} />
                </div>
                <div className="content">
                  <h4 className="characterName">Paulo Gombet,<span className="characterAge">21</span></h4>
                  <h3 className="characterRole">Segurança</h3>
                  <button className="btnSeeProfile" >Ver Perfil</button>
                </div>
            </motion.div>
            <motion.div
            transition={{type: 'spring'}}
            className="profissional">
                <div className="picture">
                  <img className="characterPicture" src={character} alt={character} />
                </div>
                <div className="content">
                  <h4 className="characterName">Carla Assunção,<span className="characterAge">25</span></h4>
                  <h3 className="characterRole">Babá</h3>
                  <button className="btnSeeProfile" >Ver Perfil</button>
                </div>
            </motion.div>
            <motion.div
            transition={{type: 'spring'}}
            className="profissional">
                <div className="picture">
                  <img className="characterPicture" src={character5} alt={character5} />
                </div>
                <div className="content">
                  <h4 className="characterName">Sérgio Alberto,<span className="characterAge">37</span></h4>
                  <h3 className="characterRole">Eletricista</h3>
                  <button className="btnSeeProfile" >Ver Perfil</button>
                </div>
            </motion.div>
            <motion.div
            transition={{type: 'spring'}}
            className="profissional">
                <div className="picture">
                  <img className="characterPicture" src={character4} alt={character4} />
                </div>
                <div className="content">
                  <h4 className="characterName">Mario Tunga,<span className="characterAge">27</span></h4>
                  <h3 className="characterRole">Diarista</h3>
                  <button className="btnSeeProfile" >Ver Perfil</button>
                </div>
            </motion.div>
      </div>
    </div>
  );
};

export default Profissionals;
