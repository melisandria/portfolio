import React from "react"
import { NavLink } from 'react-router-dom';
import CV from '../../media/cv.pdf';
import MenuBurger from "../../images/menu-burger.webp";
import LogoGithub from "../../images/logo_github.webp";
import Linkedin from "../../images/linkedin.webp";
import '../../sass/header.scss';
import ImageModale from "../../images/photo.jpg";
import Fermeture from "../../images/fermeture.webp";
import { useState } from 'react';
	
const Header = (classHeader) => {
const [toggle, setToggle] = useState(false);
const [close, setClose] = useState(true);

	  
    return (
		
	<>	
	<header className={toggle || classHeader ? "header_modal_open" : "header"}>
		<div className="header_box">
			<NavLink end to='/'>
			<div className="header_titles">
				<h1 className="header_titles_title">
				<span class="letter">R</span>ondet <span class="letter">E</span>lodie
				</h1>
				<h2 className="header_titles_subtitle">
				<span class="letter">D</span>éveloppeur <span class="letter">w</span>eb
					</h2>
			</div>
			</NavLink>
			<button className="button button--outlined">
			<a className="nav-link" href={CV} download="cv.pdf">CV</a>
			</button>
			<button className="button button-page"  onClick={() => {setToggle(!toggle)}}>
			
			Contact
			</button>
			<div className="header_links">
				<div className="container">
					<label className="btn btn-open" htmlFor="nav">
						<img src={MenuBurger} alt="menumenu" className="menu-burger" width="48" height="42" onClick={() => {setClose(!close)
					}
					
					}></img>
					</label>
					<div className={close  ? "nav hide" :"nav"}>
						<div className="nav-header">
						<img className="close" src={Fermeture} alt="" onClick={() => {setClose(!close)}}></img>
						</div>
						<ul className="nav-links">
							<label className="btn btn-nav" htmlFor="nav">
							</label>
							<NavLink className="nav-link" end to='/' onClick={() => {setClose(!close)}}>
							Accueil
							</NavLink>
							<NavLink className="nav-link" href="#projets" end to='/#projets'>
							Projets
							</NavLink>
							<NavLink className="nav-link" onClick={() => {setClose(!close)
							setToggle(!toggle)}
						}>
							Contact
							</NavLink>
							<div class="conteneur-liens-sociaux">
								<NavLink className="nav-link" target="_blank" to="https://github.com/elodie-rondet/" name="github" alt="github" >
									<img className="logo_github" src={LogoGithub} alt="logo" width="246" height="233"></img>
								</NavLink>
								<NavLink className="nav-link" target="_blank" to="https://www.linkedin.com/in/elodie-rondet-337653121/" name="github" alt="github" >
									<img className="logo_github" src={Linkedin} alt="logo" width="246" height="262"></img>
								</NavLink>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
	{toggle && (
        <div id='fenetre_modal_open'>
		<aside id="modal_modifier_1" className="modal" >	
		<div id="wrapper_modal_1">
		<p id="close"  onClick={() => {setToggle(!toggle)}}	
		>X</p>
		<p id="titre_modal_modifier">Me Contacter</p>
		<img className="img-Contact" src={ImageModale} alt="Contact"></img>
		<form className="conteneurGallerie">
		<p className="titre-image">Titre</p>
		<input className="input-titre"></input>
		<p className="nom-message">Nom</p>
		<input className="input-message"></input>
		<p className="message">Message</p>
		<textarea id="test"></textarea>
		<button className="button-valider" type="button">Envoyer</button>
		</form>
		</div>
		</aside>
	</div> 
      )
	  }
	</>
	    )
}

export default Header;