import React from "react";
import { BsLightningFill } from "react-icons/bs";
import "./styles.css";


const Notification = ({openNotification,setShowPainel,setOpenNotification}) => {  

  const handleClick = () => {
    setOpenNotification(false)
    setShowPainel(false)
  }

  return (
    <div className={`notification ${openNotification && "active"}`} onClick={()=>setOpenNotification(false)}>
        <div className={`center `}>
            <div className="main">
              <BsLightningFill size={24} className="icon"/>
              <p style={{textTransform:"none"}}><h4>Telefone:</h4> 9xx xxx xxx</p>
              <p><h4>Email:</h4> meuemail2023@gmail.com</p>
            </div>
            <div className="bottom" >
              <div className="btn outlined" onClick={handleClick} aria-label="cancelar">Cancelado</div>
              <div className="btn" onClick={handleClick} aria-label="adicionar carrinho">Negocio Fechado</div>
            </div>
        </div>
    </div>
  );
};

export default Notification;
