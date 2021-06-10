import { React, useState } from "react";
import Slider from "react-slick";
import "./SliderTrabajos.css";
import Trabajo1 from "../../media/trabajos/marco1_completo.png";
import Trabajo2 from "../../media/trabajos/marco2_completo.png";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [Trabajo1, Trabajo2, Trabajo1, Trabajo2];

function SliderTrabajos() {
    const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow2 next2" onClick={onClick}>
          <IoIosArrowForward size={35}/>
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow2 prev2" onClick={onClick}>
          <IoIosArrowBack size={35}/>
        </div>
      );
    };
  
    const [imageIndex, setImageIndex] = useState(0);
  
    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
    };
  
    return (
      <div className="slider2">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div className={index === imageIndex ? "slide2 activeSlide2" : "slide2"}>
              <img src={img} alt="Slider con imagenes de trabajos" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

export default SliderTrabajos
