import React from 'react'
import './styles.css'

const OurTeam = () => {
  return (

<div className="team" id="team">

   <div className="heading">
      <img src="images/heading-img.png" alt="" />
      <h3>Nosso Team</h3>
   </div>

   <div className="box-container">

      <div className="box">
         <img src="images/team/Adi.jpeg" alt="" />
         <h3><span style={{color:"green", opacity:.6, fontSize:"22px"}}>🖊 </span>Adilson Gombet</h3>
      </div>
      <div className="box">
         <img src="images/team/Celmer.jpeg" alt="" />
         <h3><span style={{color:"green", opacity:.6, fontSize:"22px"}}>🖊 </span>Celmer Van-Dúnem</h3>
      </div>
      <div className="box">
         <img src="images/team/Daniel.jpeg" alt="" />
         <h3><span style={{color:"green", opacity:.6, fontSize:"22px"}}>🖊 </span>Daniel Madalena</h3>
      </div>
      <div className="box">
         <img src="images/team/Helena.jpeg" alt="" />
         <h3><span style={{color:"green", opacity:.6, fontSize:"22px"}}>🖊 </span>Helena Muanza</h3>
      </div>
      <div className="box">
         <img src="images/team/Paula.jpeg" alt="" />
         <span></span><h3><span style={{color:"green", opacity:.6, fontSize:"22px"}}>🖊 </span>Paula Forquilha</h3>
      </div>
      {/* <div className="box">
         <img src="images/team/adilson.jpeg" alt="" />
         <h3>john deo</h3>
      </div> */}

   </div>

</div>

  )
}

export default OurTeam
