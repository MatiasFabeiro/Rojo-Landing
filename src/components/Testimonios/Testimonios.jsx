import React from 'react';
import './Testimonios.css';
import SliderTestimonios from './SliderTestimonios.jsx';

const Testimonios = () => {
    return (
        <div id="Testimonios" className="container-testimonios">
    
            <h1 className="testimonios-title">¿Qué opina la gente?</h1>

             <div className="testimonios-slider">

                 <SliderTestimonios/>
                
            </div>

        </div>
    )
}

export default Testimonios
