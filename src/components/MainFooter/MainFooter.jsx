import React from "react";
import "./MainFooter.css";

const MainFooter = () => {
  return (
    <footer>
      <div className="container">
          <div className="column">
            <div className="title">
              <h4>Precisas de ajuda</h4>
            </div>
            <ul className="ul">
              <a href="#contacts">Página Principal</a>
              <a href="#howbuy">Serviços</a>
              <a href="#sends">Porquê Nós?</a>
              <a href="#garanties">Profissionais</a>
              <a href="#contacts">Contactos</a>
              <a href="#payments">Pagamentos</a>
              <a href="#alternative">Resulução alternativa de litígios</a>
            </ul>
          </div>
          <div className="column">
            <div className="title">
              <h4>Links Úteis</h4>
            </div>
            <ul className="ul">
              <a href="#aboutus">Quem Somos</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Carreiras</a>
              <a href="#conditions">Condições Gerais</a>
              <a href="#policy">Política de Privacidade</a>
              <a href="#afiliades">Afiliados</a>
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default MainFooter;
