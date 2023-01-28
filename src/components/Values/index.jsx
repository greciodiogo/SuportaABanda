import React from 'react'
import './styles.css'

const Values = () => {
  return (
<>

<section className="about" id="about">


   <div className="content">
      <h3>Missão</h3>
      <p>Trazer soluções de forma fácil às diversas necessdidades dos lares com 
         insentivo e promoção de auto emprego em Luanda
      </p>
   </div>

   <div className="image" style={{borderRadius:"50%"}}>
      <img src="images/logo2.jpeg" alt="" style={{borderRadius:"50%"}}/>
   </div>
</section>
<section className="about" id="about">

   <div className="image">
      <img src="images/logo.jpeg" alt="" />
   </div>

   <div className="content">
      <h3>Visão</h3>
      <p>Albergar maior partes dos profissionais que trabalham por conta própria na nossa plataforma
         e ser a preferência da população na solução de problemas domesticos enfrentados
         pelos lares nos próximos 5 anos em Luanda.
      </p>
   </div>

</section>

<section className="facility">

   <div className="heading">
      <h3>Nossos Valores</h3>
   </div>

   <div className="box-container">


      <div className="box">
         <h3>✔Excelência</h3>
      </div>

      <div className="box">
         <h3>✔Flexibilidade</h3>
      </div>

      <div className="box">
         <h3>✔Comprometimento</h3>
      </div>

      <div className="box">
         <h3>✔Confiabilidade</h3>
      </div>
   </div>

</section>
</>
  )
}

export default Values
