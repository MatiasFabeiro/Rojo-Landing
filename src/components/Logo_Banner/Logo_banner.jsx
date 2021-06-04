import React from 'react'
import './Logo_banner.css'
import BannerLogo from '../../media/inicio/logo_png.png'

const Logo_banner = () => {
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

        </div>
        )
}

export default Logo_banner


