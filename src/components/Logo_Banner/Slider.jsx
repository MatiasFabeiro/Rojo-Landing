import React, { useState } from 'react'
import './Slider.css'
import BannerImg1 from '../../media/inicio/Imagenes/max-williams-2aIYMoayjtY-unsplash.jpg'
import BannerImg2 from '../../media/inicio/Imagenes/alex-simon-rC29LgEbTjU-unsplash.jpg'

const Slider = () => {
    
const imagesSlider = [BannerImg1, BannerImg2];

const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })

  const { translate, transition } = state

    return (

    <div className="banner-style-3" data-cycle={3400}>
        <div class="slideshow-container">
            <div class="mySlides fade">
                {/* {imagesSlider.map((img, index) => (
                    <div key={index}>
                        <img src={img} id="Home" className="banner-image2" alt="Slider con imagenes representando el color Rojo"/>
                    </div>
                ))} */}
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>

            <div class="mySlides fade">
                <img src={BannerImg2} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
            <div class="mySlides fade">
                <img src={BannerImg1} id="Home" className="banner-image2" alt=""/>
            </div>
        </div>
    </div>
    )
}

export default Slider
