import React from 'react'
import './Servicios.css'
import { Container, Row, Col } from 'react-grid-system';
import ServiceBranding from '../../media/servicios/service_branding.png'
import ServiceDesarrollo from '../../media/servicios/service_desarrollo.png'
import ServiceDiseño from '../../media/servicios/service_diseño.png'
import ServiceGestion from '../../media/servicios/service_gestion.png'
import ServiceLearning from '../../media/servicios/service_learning.png'
import ServicePublicidad from '../../media/servicios/service_publicidad.png'
import { setConfiguration } from 'react-grid-system';

setConfiguration({ defaultScreenClass: 'xxl', containerWidths: 1920 });

const Servicios = () => {
    return (
        <div id="Servicios">

            <div className="blue-line"></div>

                
            <h1 className="servicios-title">¿Qué hacemos?</h1>

            <div className="container-servicios">

                <div align="start" className="servicios-row">
                        <div className="servicios-col">
                            <img src={ServiceBranding} alt="" className="imagen-servicio"/>
                        </div>
                        <div className="servicios-col">
                            <img src={ServiceGestion} alt="" className="imagen-servicio"/>
                        </div>
                        <div className="servicios-col">
                        <img src={ServicePublicidad} alt="" className="imagen-servicio"/>
                        </div>
                        <div className="servicios-col">
                                <img src={ServiceLearning} alt="" className="imagen-servicio"/>
                        </div>
                        <div className="servicios-col">
                                <img src={ServiceDiseño} alt="" className="imagen-servicio"/>
                        </div>
                        <div className="servicios-col">
                                <img src={ServiceDesarrollo} alt="" className="imagen-servicio"/>
                        </div>
                </div>
            </div>

            {/* <Container className="container-servicios">

                <Row align="start" className="servicios-row">
                        <Col xxl={4} xl={4} lg={6} md={12} sm={12} xs={12} className="servicios-col">
                            <img src={ServiceBranding} alt="" className="imagen-servicio"/>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={12} sm={12} xs={12} className="servicios-col">
                            <img src={ServiceGestion} alt="" className="imagen-servicio"/>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={12} sm={12} xs={12} className="servicios-col">
                        <img src={ServicePublicidad} alt="" className="imagen-servicio"/>
                        </Col>
                </Row>
                <Row align="start" className="servicios-row">
                    <Col xxl={4} xl={4} lg={6} md={12} sm={12} xs={12} className="servicios-col">
                            <img src={ServiceLearning} alt="" className="imagen-servicio"/>
                    </Col>
                    <Col xxl={4} xl={4} lg={6} md={12} sm={12} xs={12} className="servicios-col">
                            <img src={ServiceDiseño} alt="" className="imagen-servicio"/>
                    </Col>
                    <Col xxl={4} xl={4} lg={6} md={12} sm={12} xs={12} className="servicios-col">
                            <img src={ServiceDesarrollo} alt="" className="imagen-servicio"/>
                    </Col>
                </Row>
            </Container> */}
        </div>
    )
}

export default Servicios
