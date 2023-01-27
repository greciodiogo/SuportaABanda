import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="ambiente-magico">
        <section className="s-testimonials">
          <div className="container">
            <div className="top">
              <div className="left">
                <span className="extra">Nossos parceiros</span>
                <h2>Suas ofertas pra milhões de lojistas</h2>
              </div>
            </div>
            <div className="ctrl-slide">
              <button className="btn btn-prev">
                <div className="arrow"></div>
              </button>{" "}
              <button className="btn btn-next">
                <div className="arrow"></div>
              </button>
            </div>
          </div>
          <div className="slide-depo-lojistas">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="photo">
                  <div>
                    <img
                      src="../assets/img/etatica-foto-final.jpeg"
                      alt="foto etatica"
                    />
                  </div>
                </div>
                <div className="info">
                  <div className="aspas">
                    <img src="../assets/img/aspas-depoimento.svg" alt="aspas" />
                  </div>
                  <p>
                    "Somos uma agência focada em e-commerce desde 2008. Durante
                    esses mais de 10 anos vivendo intensamente esse universo,
                    passamos por diversos desafios. A parceria com a Loja
                    Integrada veio em 2018 e nos trouxe muitas oportunidades.
                    Hoje, alcançamos a marca de mais de 550 loja virtuais
                    assinadas pela nossa agência só em 2021. Não tenho dúvidas
                    da importância da Loja Integrada na história da E-tática e
                    tenho certeza que ainda tem muito mais por vir."
                  </p>
                  <ul className="user">
                    <li>
                      <strong>Luís Felipe Salomão</strong>
                    </li>
                    <li>
                      <span>CEO Etatica</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="photo">
                  <div>
                    <img src="../assets/img/marco.png" alt="foto Marco" />
                  </div>
                </div>
                <div className="info">
                  <div className="aspas">
                    <img src="../assets/img/aspas-depoimento.svg" alt="aspas" />
                  </div>
                  <p>
                    “Ser parceiro da plataforma mais usada no Brasil ajudou
                    muito a Consultor Net em volume de negócios e visibilidade
                    no mercado. Conseguimos oferecer um serviço diferenciado,
                    que traz muito retorno para os nossos clientes. Estamos
                    preparados para o ano de 2020 e temos certeza que será um
                    ano histórico para o comércio eletrônico. ”
                  </p>
                  <ul className="user">
                    <li>
                      <strong>Marco Sordi</strong>
                    </li>
                    <li>
                      <span>CEO consultornet.com.br</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="photo">
                  <img src="../assets/img/hygor.webp" alt="foto Hygor" />
                </div>
                <div className="info">
                  <div className="aspas">
                    <img src="../assets/img/aspas-depoimento.svg" alt="aspas" />
                  </div>
                  <p>
                    “Nossa empresa tem como missão ajudar micro e pequenas
                    empresas que nunca venderam pela internet e encontramos na
                    Loja Integrada a melhor solução, facilidade na utilização,
                    ecossistema completo de aplicativos, além de ser a maior
                    plataforma no Brasil para esse público. Um braço direito em
                    tecnologia para o nosso negócio.”
                  </p>
                  <ul className="user">
                    <li>
                      <strong>Hygor Roque</strong>
                    </li>
                    <li>
                      <span>CEO www.trendesign.com.br</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="photo">
                  <div>
                    <img
                      src="../assets/img/parceiro-sama-final.jpeg"
                      alt="sama"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
