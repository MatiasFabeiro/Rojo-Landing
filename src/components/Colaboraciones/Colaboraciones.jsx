import React from 'react';
import './Colaboraciones.css';
import SlideShow from '../Colaboraciones/SlideShow.jsx';

const Colaboraciones = () => {
    return (
        <div id="Colaboraciones" className="colaboraciones-container">
            
            <div className="colaboraciones">

                <h1>Empresas que confian en nosotros</h1>

                <div className="slideshow">
                <SlideShow></SlideShow>
                </div>
                
            </div>

        </div>
    )
}

export default Colaboraciones
