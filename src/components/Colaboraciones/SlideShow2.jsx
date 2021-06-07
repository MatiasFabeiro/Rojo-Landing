import React from 'react';
import './SlideShow.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Colaboraciones1 from '../../media/colaboraciones/card_opiniones.png';


// const slideImages = [
//     {Colaboraciones1},
//     {Colaboraciones1},
//     {Colaboraciones1},
//   ];

const SlideShow = () => {
  return (
      <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <img src={Colaboraciones1} alt="Imagen de colaboraciones 1" />
          {/* <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div> */}
        </div>
        <div className="each-slide">
        <img src={Colaboraciones1} alt="Imagen de colaboraciones 2" />
          {/* <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div> */}
        </div>
        <div className="each-slide">
        <img src={Colaboraciones1} alt="Imagen de colaboraciones 3" />
          {/* <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div> */}
        </div>
      </Slide>
    </div>
  )
}

export default SlideShow
