import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import '../styles/Hamburgers.css'
import '../styles/Header.css'
import { slide as Menu } from "react-burger-menu";
import Whatsapp from "./img/icon-whatsapp.png"
import Email from "./img/icon-mail.png"
import Linkedin from "./img/icon-linkedin.png"

class Header extends Component {
	render() {
		return (
			<section id="header" className={this.props.className}>
				<div className="menu-principal">
					<Container fluid>
						<Row>
							<div className="menu-header-geral col-md-12">
								<div className="logo hover-padrao">
									<a href="/">Rodolpho Becker_</a>
								</div>
								<Menu right className="menu-hamburger">
									<a className="menu-item" href="/">
										Projetos
								</a>
									<a className="menu-item" href="/about">
										Clientes
								</a>
									<a className="menu-item" href="/contact">
										Sobre
								</a>
									<a className="menu-item" href="/contact">
										Contrate
								</a>
								</Menu>
							</div>
						</Row>
					</Container>
				</div>
				<div className="redes-sociais">
					<div className="rede-social-single opacity-img">
						<a target="blank" href="https://wa.me/11982089937">
							<img className="img-fluid" src={Whatsapp} alt="" />
						</a>
					</div>
					<div className="rede-social-single opacity-img">
						<a target="blank" href="mailto:becker.rodolpho@gmail.com">
							<img className="img-fluid" src={Email} alt="" />
						</a>
					</div>
					<div className="rede-social-single opacity-img">
						<a target="blank" href="https://www.linkedin.com/in/rodolpho-becker/">
							<img className="img-fluid" src={Linkedin} alt="" />
						</a>
					</div>
				</div>
			</section>
		);
	}
}
export default Header