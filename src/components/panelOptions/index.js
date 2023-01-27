import React from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ReactDOM  from 'react-dom'
import "./styles.css";

const PainelOptions = ({ showCheckout, closeModal }) => {
  const history = useNavigate()

  const handleCheckout = () => {
    history('/carrinhoCompras')
  }
    
  const modal = (
    <div className="panelOPtions">
      <div className="container">
        <div className="top">
          <span></span>
          <button className="btnClose" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        <div className="bottom">
           <button href="" className="btn outlinedBtn" onClick={closeModal}>
                <FaArrowRight color="gray"/>
                Cancelar
            </button>
           <button href="" className="btn" onClick={handleCheckout}>
                <FaArrowRight color="white"/>
                Acordo Feito
            </button>
        </div>
      </div>
    </div>  
    )
  return showCheckout ? ReactDOM.createPortal(modal, document.body) : null
};

export default PainelOptions;
