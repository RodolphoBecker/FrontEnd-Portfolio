import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../styles/Footer.css'

function Footer () {
    return (
        <section id="contato">
            <Container>
                <Row>
                    <div className="contato-geral col-md-12">
                        <Row className="wrapper-content">
                            <div className="contato-titulo main-title col-md-12">
                                <h1>Contato_</h1>
                            </div>
                            <div className="contato-texto col-md-5">
                                <p>Que tal trabalharmos juntos? Me Contrate para seu próximo projeto!</p>
                            </div>
                            <div className="links col-md-6">
                                <div className="link-single">
                                    <a target="blank" href="https://wa.me/11982089937">Whatsapp</a>
                                </div>
                                <div className="link-single">
                                    <a target="blank" href="mailto:becker.rodolpho@gmail.com">E-Mail</a>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            <div className="menu-inferior col-md-12">
                <Container>
                    <Row>
                        <div className="d-flex menu-inferior-dados col-md-12">
                            <div className="texto">
                                <p>Dev: Rodolpho Becker!</p>
                            </div>
                            <div className="texto">
                                <p>Layout: <span><a target="blank" href="https://diretoradearte.com.br/">Mariana Klein</a></span></p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
export default Footer