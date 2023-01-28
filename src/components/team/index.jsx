import React from 'react'
import './styles.css'

const OurTeam = () => {
  return (

<section className="team" id="team">

   <div className="heading">
      <img src="images/heading-img.png" alt="" />
      <h3>Nosso Team</h3>
   </div>

   <div className="box-container">

      <div className="box">
         <img src="images/team/Adilson.png" alt="" />
         <h3>Adilson Gombet</h3>
      </div>
      <div className="box">
         <img src="images/team/Celmer.jpeg" alt="" />
         <h3>Celmer Alves</h3>
      </div>
      <div className="box">
         <img src="images/team/Daniel.jpeg" alt="" />
         <h3>Daniel Madalena</h3>
      </div>
      <div className="box">
         <img src="images/team/Helena.jpeg" alt="" />
         <h3>Helena Muanza</h3>
      </div>
      <div className="box">
         <img src="images/team/Paula.jpeg" alt="" />
         <h3>Paula Forquilha</h3>
      </div>
      {/* <div className="box">
         <img src="images/team/adilson.jpeg" alt="" />
         <h3>john deo</h3>
      </div> */}

   </div>

</section>

  )
}

export default OurTeam
