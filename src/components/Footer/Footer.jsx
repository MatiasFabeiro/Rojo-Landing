import React from 'react'
import './Footer.css'
import Instagram from '../../media/footer/instagram.svg'
import Linkedin from '../../media/footer/linkedin.svg'
import PhoneIcon from '../../media/footer/phone.svg'

export const Footer = () => {
    return (
        <div id="Footer">
            
            <div className="footer-container">

            <div className="footer-informacion-contacto">

                <p>Información de contacto</p>

                <div className="numero-contacto">
                <a href="https://wa.me/5491123859081?" target="blank" className="btn-contacto-footer">
                <p> 
                <img src={PhoneIcon} alt="Imagen del icono de un telefono" className="phone-icon"/>
                +54 9 1123859081
                </p>
                </a>
                </div>

            </div>

            <div className="footer-redes-sociales">            
                
                <p>Redes Sociales</p>
                <div className="social-media-container-2">

               <a href="http://www.instagram.com/rojoagency" target="blank"> 
                <img src={Instagram} alt="Logo de Instagram" className="social-media-2"/>
               </a>

               <a href="https://www.linkedin.com/company/rojo-agency/" target="blank">
                    <img src={Linkedin} alt="Logo de LinkedIn" className="social-media-2"/>
               </a>

               </div>

            </div>

            </div>

            <div className="footer-copy">

                <p>Rojo Agency © 2021</p>

            </div>

        </div>
    )
}

export default Footer
