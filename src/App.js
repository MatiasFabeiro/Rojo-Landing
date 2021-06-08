import React, { useState, useEffect } from 'react';
import './App.css';
import LogoBanner from './components/Logo_Banner/Logo_banner';
import Navbar from './components/Navbar/Navbar';
import Servicios from './components/Servicios/Servicios.jsx'
import Trabajos from './components/Trabajos/Trabajos.jsx'
import Nosotros from './components/Nosotros/Nosotros.jsx'
import Testimonios from './components/Testimonios/Testimonios.jsx'
import Colaboraciones from './components/Colaboraciones/Colaboraciones.jsx'
import PosteosIG from './components/PosteosIG/PosteosIG.jsx'
import Contactanos from './components/Contactanos/Contactanos.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() =>{
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}></Navbar>
      <LogoBanner></LogoBanner>
      <Servicios></Servicios>
      <Trabajos></Trabajos>
      <Nosotros></Nosotros>
      <Testimonios></Testimonios>
      <Colaboraciones></Colaboraciones>
      {/* <PosteosIG></PosteosIG> */}
      <Contactanos></Contactanos>
      <Footer></Footer>
    </div>
  );
}

export default App;
