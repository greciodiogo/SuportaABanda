import React from "react";
import "./Profissional.css";

const Profissional = ({data,handlePrevProfissional}) => {
    const { id, picture, name, age, role } = data;
    const url = `images/${picture}`
  return (
    <div className="profissional">
      <div className="picture">
        <img
          className="characterPicture"
          src={url}
          alt={picture}
        />
      </div>
      <div className="content">
        <h4 className="characterName">
          {name},<span className="characterAge">{age}</span>
        </h4>
        <h3 className="characterRole">{role}</h3>
        <button className="btnSeeProfile" onClick={()=>handlePrevProfissional(id)}>Ver Perfil</button>
      </div>
    </div>
  );
};

export default Profissional;
