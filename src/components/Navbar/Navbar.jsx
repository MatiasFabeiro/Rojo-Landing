import React from 'react'
import './Navbar.css'
import NavbarLogo from '../../media/rojo_iso.png'
import Instagram from '../../media/inicio/iconos/icon_instagram.png'
import Whatsapp from '../../media/inicio/iconos/icon_whatsapp.png'
import Linkedin from '../../media/inicio/iconos/icon_linkedin.png'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = ({isScrolling}) => {
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            
            <div className="navbar-logo-container">

               <Link to="Inicio" spy={true} smooth={true} offset={0} duration={700} className="transition">
               <img src={NavbarLogo} alt="Iso de Rojo Agency en la barra de navegación" className="navbar-logo"/>
               </Link>

            </div>

               <div className="navbar-sections">

               <Link to="Servicios" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items transition">Servicios</Link>

               <Link to="Trabajos" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items transition">Trabajos</Link>

               <Link to="Nosotros" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items transition">Nosotros</Link>

               <Link to="Testimonios" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items transition">Testimonios</Link>

               <Link to="Colaboraciones" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items transition">Colaboraciones</Link>

               <Link to="Contactanos" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items transition">Contáctanos</Link>

               </div>

               <div className="social-media-container">

               <a href="http://www.instagram.com/rojoagency" target="blank"> 
                <img src={Instagram} alt="Logo de Instagram" className="social-media"/>
               </a>

               <a href="https://www.linkedin.com/company/rojo-agency/" target="blank">
                    <img src={Linkedin} alt="Logo de LinkedIn" className="social-media"/>
               </a>

               <a href="https://wa.me/5491123859081?" target="blank" className="btn-wpp">
                    <img src={Whatsapp} alt="Logo de WhatsApp" className="social-media"/>
               </a>

               </div>
            
        </nav>
    )
}

export default Navbar
