import {React, useState} from 'react';
import './HamburgerMenu.css';
import { stack as Menu } from 'react-burger-menu'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const HamburgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false)

  function openBurger (){
    setIsOpen(true)
    document.body.style.overflow = 'hidden';
    console.log('abrir Burger')
  }

  function closeBurger (){
      setIsOpen(false)
      document.body.style.overflow = 'unset';
      console.log('cerrar Burger')
   }

  //  useEffect(()=>{ setIsOpen(false) },[])

    return (
    <div>
      <Menu right isOpen={isOpen} onOpen={()=>openBurger()} onClose={()=>closeBurger()} className="hamburger-menu">
        <Link to="Servicios" onClick={()=>closeBurger()} spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Servicios</Link>

        <Link to="Trabajos" onClick={()=>closeBurger()} spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Trabajos</Link>

        <Link to="Nosotros" onClick={()=>closeBurger()} spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Nosotros</Link>

        <Link to="Testimonios" onClick={()=>closeBurger()} spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Testimonios</Link>

        <Link to="Colaboraciones" onClick={()=>closeBurger()} spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Colaboraciones</Link>

        <Link to="Contactanos" onClick={()=>closeBurger()} spy={true} smooth={true} offset={0} duration={500} className="navbar-sections-items2 transition">Contáctanos</Link>

        <a href="https://wa.me/5491123859081?" target="blank" className="navbar-sections-items2">WhatsApp</a>
       
        {/* <a id="home" className="menu-item" href="/">Home</a>
       <a id="about" className="menu-item" href="/about">About</a>
       <a id="contact" className="menu-item" href="/contact">Contact</a>
       <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}

      </Menu>
    </div>
    )
}

export default HamburgerMenu;
