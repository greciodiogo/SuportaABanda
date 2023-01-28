import React from 'react'
import './styles.css'

const Values = () => {
  return (
<>

<section className="about" id="about">

   <div className="image">
      <img src="images/logo.jpeg" alt="" />
   </div>

   <div className="content">
      <h3>Visão</h3>
      <p>Albergar maior partes dos profissionais que trabalham por conta própria na nossa plataforma
         e ser a preferência da população
      </p>
      <a href="#menu" className="btn">our menu</a>
   </div>

</section>

<section className="facility">

   <div className="heading">
      <h3>Nossos Valores</h3>
   </div>

   <div className="box-container">


      <div className="box">
         <h3>Excelência</h3>
      </div>

      <div className="box">
         <h3>Flexibilidade</h3>
      </div>

      <div className="box">
         <h3>Comprometimento</h3>
      </div>

      <div className="box">
         <h3>Confiabilidade</h3>
      </div>
   </div>

</section>
</>
  )
}

export default Values
