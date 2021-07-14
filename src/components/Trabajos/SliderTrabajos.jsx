import { React, useState, Component } from "react";
import { Document, Page } from "react-pdf";
import Slider from "react-slick";
import "./SliderTrabajos.css";
import Trabajo1 from "../../media/trabajos/Ceowner.png";
import Trabajo2 from "../../media/trabajos/BerY.png";
import Trabajo3 from "../../media/trabajos/GLooUDS.png";
import Trabajo4 from "../../media/trabajos/GomezAsociados.png";
import Trabajo5 from "../../media/trabajos/TXC-SRL.png";
import Trabajo6 from "../../media/trabajos/SakuraSkincare.png";
import Contenido1 from "../../media/trabajos/Secciones/Doc_ceowner.pdf";
import Contenido2 from "../../media/trabajos/Secciones/Doc_bery.pdf";
import Contenido3 from "../../media/trabajos/Secciones/Doc_Gloouds.pdf";
import Contenido4 from "../../media/trabajos/Secciones/Doc_GYA.pdf";
import Contenido5 from "../../media/trabajos/Secciones/TXC-SRL_DOC.pdf";
import Contenido6 from "../../media/trabajos/Secciones/Doc_Sakura.pdf";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";

const images = [
  {id: 0, banner: Trabajo1, contenido: Contenido1},
  {id: 1, banner: Trabajo2, contenido: Contenido2},
  {id: 2, banner: Trabajo3, contenido: Contenido3},
  {id: 3, banner: Trabajo4, contenido: Contenido4},
  {id: 4, banner: Trabajo5, contenido: Contenido5},
  {id: 5, banner: Trabajo6, contenido: Contenido6},
];

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function SliderTrabajos() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  // function afterOpenModal() {
  //     subtitle.style.color = "#787276";
  //   }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow2 next2" onClick={onClick}>
        <IoIosArrowForward size={35} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow2 prev2" onClick={onClick}>
        <IoIosArrowBack size={35} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
    infinite: true,
    // dots: true,
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
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider2">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            className={index === imageIndex ? "slide2 activeSlide2" : "slide2"}
          >
            <img
              src={img.banner}
              onClick={() => {setCurrentImage(index); openModal()}}
              alt="Slider con imagenes de trabajos"
            />

            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customModalStyles}
              shouldCloseOnEsc={true}
              shouldCloseOnOverlayClick={true}
              // contentLabel="Example Modal"
              className="Modal"
              overlayClassName="Overlay"
              ariaHideApp={false}
            >
            <div className="close-modal-container">
              <ImCross 
              className="modal-x" 
              size={20} 
              onClick={() => closeModal()}/>
            </div>
            <div className="imgModal-container">
              <Document 
                file={images[currentImage].contenido}
                onLoadSuccess={onDocumentLoadSuccess}
                className="imgModal"
                alt="Documento con trabajo detallado">
                  <Page pageNumber={pageNumber}/>
                </Document>
            </div>
            </Modal>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderTrabajos;
