import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../styles/Clientes.css'
import PlaceHolder from './img/placeholder.png'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Clientes() {
    return (
        <section id="clientes">
            <Container>
                <Row>
                    <div className="clientes-geral col-md-12">
                        <div className="clientes-titulo main-title">
                            <h1>Clientes_</h1>
                        </div>
                        <div className="clientes-mosaico">
                            <Row>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-left">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt=""/>
                                    </a>
                                </div>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-right">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt="" />
                                    </a>
                                </div>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-left">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt="" />
                                    </a>
                                </div>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-right">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt="" />
                                    </a>
                                </div>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-left">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt="" />
                                    </a>
                                </div>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-right">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt="" />
                                    </a>
                                </div>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-left">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt="" />
                                    </a>
                                </div>
                                <div className="mosaico-single opacity-img col-md-3" data-aos="flip-right">
                                    <a href="Home.jsx">
                                        <img className="img-fluid" src={PlaceHolder} alt="" />
                                    </a>
                                </div>
                                
                            </Row>    
                        </div>
                    </div>
                </Row>
            </Container>
        </section>     

    );
}
export default Clientes