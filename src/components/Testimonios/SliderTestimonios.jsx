import { React, useState } from "react";
import Slider from "react-slick";
import "./SliderTestimonios.css";
import Testimonio1 from "../../media/opiniones/valorations_ceowner.png";
import Testimonio2 from "../../media/opiniones/valorations_gloouds.png";
import Testimonio3 from "../../media/opiniones/valorations_bery.png";
import Testimonio4 from "../../media/opiniones/valorations_TXCSRL.png";
import Testimonio5 from "../../media/opiniones/valorations_sakuraskinkare.png";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const images = [Testimonio1, Testimonio2, Testimonio3, Testimonio4, Testimonio5];

function SliderTestimonios() {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward size={35}/>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack size={35}/>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      // slidesToScroll: 4,
      // initialSlide: 0,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: true,
          }
        },

        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: true,
          }
        },
      ]
    };


  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt="Slider con imagenes de testimonios" />
          </div>
        ))}
      </Slider>

        </div>
  );
}

export default SliderTestimonios;
