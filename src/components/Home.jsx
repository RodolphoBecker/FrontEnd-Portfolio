import React from 'react'
import {Container, Row} from 'react-bootstrap'
import '../styles/Home.css'
import Foto from './img/imagem-placeholder.png'

function Home() {
    return (
        <section id="home">
            <Container>
                <Row>
                    <div className="home-conteudo-geral col-md-12">
                        <Row>    
                            <div className="home-conteudo-single col-md-7">
                                <h1>Olá! Eu sou Rodolpho, Front-end Web Developer</h1>
                                <p className="text-white">Nascido em 1987, Pai e Engenheiro Civil, hoje trabalho como desenvolvedor web e prezo muito a área. Gosto de trabalhar no estilo clean, inteligente e efetivo. Persigo a melhor solução através lógica. Busco desafios, evoluir e aprender cada dia mais. Gosto de animações bem trabalhadas que tornam o design de um site mais interessante. Aberto a novas experiências. Trabalho com aquilo que gosto. Que tal trabalharmos juntos?</p>
                            </div>
                            <div className="home-conteudo-single col-md-3">
                                <img className="img-fluid" src={Foto} alt=""/>
                            </div>
                            <div className="home-conteudo-single col-md-12">
                                <div className="scale-hover">
                                    <a className="text-white" href="home.jsx">Contrate<br /><span>Scroll Down</span></a>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
export default Home