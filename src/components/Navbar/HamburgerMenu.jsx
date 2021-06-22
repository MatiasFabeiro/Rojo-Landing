import React from 'react';
import './HamburgerMenu.css';
import { stack as Menu } from 'react-burger-menu'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class HamburgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <div className="hamburger-menu">
      <Menu right>
        <Link to="Servicios" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Servicios</Link>

        <Link to="Trabajos" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Trabajos</Link>

        <Link to="Nosotros" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Nosotros</Link>

        <Link to="Testimonios" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Testimonios</Link>

        <Link to="Colaboraciones" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Colaboraciones</Link>

        <Link to="Contactanos" spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Contáctanos</Link>
       
        {/* <a id="home" className="menu-item" href="/">Home</a>
       <a id="about" className="menu-item" href="/about">About</a>
       <a id="contact" className="menu-item" href="/contact">Contact</a>
       <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}

      </Menu>
      </div>
    );
  }
}

export default HamburgerMenu;
