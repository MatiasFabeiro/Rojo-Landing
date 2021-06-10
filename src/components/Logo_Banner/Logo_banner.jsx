import React, { Component } from 'react';
import './Logo_banner.css';
import BannerLogo from '../../media/inicio/logo_png.png';
// import BannerSlider from './Slider.jsx'
// import './Slider.css'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import SliderBanner from "react-slick"; 
import BannerImg1 from '../../media/inicio/Imagenes/max-williams-2aIYMoayjtY-unsplash.jpg'
import BannerImg2 from '../../media/inicio/Imagenes/alex-simon-rC29LgEbTjU-unsplash.jpg'
import BannerImg3 from '../../media/inicio/Imagenes/henry-co-3JFVNo4ukKQ-unsplash.jpg'
import BannerImg4 from '../../media/inicio/Imagenes/jamie-street-lxURRFdeWps-unsplash.jpg'
import BannerImg5 from '../../media/inicio/Imagenes/jean-luc-benazet-l-_HIEBBq3Y-unsplash.jpg'
import BannerImg6 from '../../media/inicio/Imagenes/chris-barbalis-LBnCbaWBeDI-unsplash.jpg'
import BannerImg7 from '../../media/inicio/Imagenes/massimo-virgilio-SjKLWW_eWIo-unsplash.jpg'
import BannerImg8 from '../../media/inicio/Imagenes/immo-wegmann-5slD0c0tQhg-unsplash.jpg'
import BannerImg9 from '../../media/inicio/Imagenes/martin-engel-grafiker-hamburg-rGY_C66ZERU-unsplash.jpg'
import BannerImg10 from '../../media/inicio/Imagenes/ricardo-gomez-angel-3kzlCL3rj8A-unsplash.jpg'

const Logo_banner = () => {

    // const imagesSlider = [BannerImg1, BannerImg2, BannerImg3, BannerImg4, BannerImg5, BannerImg6, BannerImg7, BannerImg8, BannerImg9, BannerImg10]

    var settings = {  
        // dots: true,
        // fade: true,
        autoplay: true,  
        infinite: true,
        speed: 3400,  
        centerMode: false,  
        slidesToShow: 1,  
        slidesToScroll: 1  
        }; 

    return (
        <div id="Inicio" className="banner-container">

            <div className="banner-logo">
            <img className="banner-image" src={BannerLogo} alt="Logo Rojo Agency"/>
            </div>
            
            <div className="container-text-and-btn">

                <div className="banner-text">
                    <h1>Te escuchamos para hacer magia con tu negocio</h1>

                    <p>Hacemos de la comunicación digital la mayor aliada para negocios que quieran comunicar con creatividad y originalidad.</p>
                </div>

                <div className="btn-container">
                    <a href="MailTo:contacto@rojo.agency"> 
                        <button className="btn-contactanos">
                            Contáctanos 
                        </button> 
                    </a>
                </div>
            </div>

            <SliderBanner {...settings} className="slider-banner">  
            <div className="wdt-slider">  
              <img src={BannerImg1} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg2} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg3} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg4} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg5} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg6} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg7} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg8} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg9} className="img-slider"/>  
            </div>  
            <div className="wdt-slider">  
              <img src= {BannerImg10} className="img-slider"/>  
            </div>
            </SliderBanner>

        </div>
        )
}

export default Logo_banner


