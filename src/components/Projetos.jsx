import React from 'react'
import {Container, Row} from 'react-bootstrap'
import '../styles/Projetos.css'
import TrennepohlHome from './img/trennepohl-01.png'
import Fabrica12Home from './img/fabrica12-01.png'
import DiasdeSouzaHome from './img/dias-de-souza-01.png'
import DuarteTonnetiHome from './img/duartetonneti-01.png'
import PwrHome from './img/pwr-01.png'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projetos() {
    return (
      <section id="projetos">
        <Container>
          <Row>
            <div className="projetos-geral col-md-12">
              <div className="projetos-titulo main-title">
                <h1>Projetos_</h1>
              </div>
              <div className="projetos-mosaico">
                <div className="projeto-single" data-aos="fade-right">
                  <img className="img-fluid" src={TrennepohlHome} alt="" />
                  <div className="dados">
                    <div className="projetos-subtitulo main-title">
                      <h2 className="text-gray">
                        Trennepohl
                        <br />
                        Advogados
                      </h2>
                    </div>
                    <div className="projetos-link hover-branco">
                      <a
                        target="blank"
                        className="text-gray"
                        href="https://www.trennepohl.com/"
                      >
                        Veja
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projeto-single" data-aos="fade-left">
                  <img className="img-fluid" src={Fabrica12Home} alt="" />
                  <div className="dados">
                    <div className="projetos-subtitulo main-title">
                      <h2 className="text-gray">Fabrica12</h2>
                    </div>
                    <div className="projetos-link hover-branco">
                      <a
                        target="blank"
                        className="text-gray"
                        href="https://fabrica12.com.br/"
                      >
                        Veja
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projeto-single" data-aos="fade-right">
                  <img className="img-fluid" src={DiasdeSouzaHome} alt="" />
                  <div className="dados">
                    <div className="projetos-subtitulo main-title">
                      <h2 className="text-gray">
                        Dias de Souza <br />
                        Advogados
                      </h2>
                    </div>
                    <div className="projetos-link hover-branco">
                      <a
                        target="blank"
                        className="text-gray"
                        href="https://advds.com.br/"
                      >
                        Veja
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projeto-single" data-aos="fade-left">
                  <img className="img-fluid" src={DuarteTonnetiHome} alt="" />
                  <div className="dados">
                    <div className="projetos-subtitulo main-title">
                      <h2 className="text-gray">
                        Duarte Tonetti
                        <br />
                        Advogados
                      </h2>
                    </div>
                    <div className="projetos-link hover-branco">
                      <a
                        target="blank"
                        className="text-gray"
                        href="http://dtadvogados.com.br/"
                      >
                        Veja
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projeto-single" data-aos="fade-right">
                  <img className="img-fluid" src={PwrHome} alt="" />
                  <div className="dados">
                    <div className="projetos-subtitulo main-title">
                      <h2 className="text-gray">PWR Capital</h2>
                    </div>
                    <div className="projetos-link hover-branco">
                      <a
                        target="blank"
                        className="text-gray"
                        href="http://www.pwr-capital.com/"
                      >
                        Veja
                      </a>
                    </div>
                  </div>
                </div>
                <div className="projetos-link hover-padrao">
                  <a className="text-gray" href="projetos.jsx">
                    Portfólio Completo
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    );
}
export default Projetos