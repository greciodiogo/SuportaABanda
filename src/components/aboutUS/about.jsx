import React from 'react'
import './about.css'

const AboutCont = () => {
  return (
    <>
    <section className="ambiente-magico">
        <div className="container first">
            <div className="text">
                <h2>Missão</h2>
                <p>Trazer soluções de forma fácil às diversas necessdidades dos lares com 
                    insentivo e promoção de auto emprego em Luanda
                </p>
                    <a href="#" className="btn">Ver a nossa visão</a>
            </div>
            <div className="image">
                <img
                    src="images/logo2.jpeg" alt="images/logo2.jpeg"
                />
            </div>
        </div>
    </section>
    <section className="ambiente-magico">
        <div className="container">
            <div className="image">
                <img
                    src="images/logo.jpeg" alt="images/logo2.jpeg"
                />
            </div>
            <div className="text">
            <span className="extra">A maior plataforma de intermediação do País</span>
                <h2>Visão</h2>
                <p>Albergar maior partes dos profissionais que trabalham por conta própria na nossa plataforma
                    e ser a preferência da população na solução de problemas domesticos enfrentados
                    pelos lares nos próximos 5 anos em Luanda.
                </p>
                <a href="#" className="btn">Ver o elenco responsável</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutCont
