import React from 'react'
import './Nosotros.css'
import { Container, Row, Col } from 'react-grid-system'
import TeamVicky from '../../media/equipo/team_vicky.png'
import TeamJuly from '../../media/equipo/team_july.png'
import TeamNanu from '../../media/equipo/team_nanu.png'
import { setConfiguration } from 'react-grid-system';

setConfiguration({ defaultScreenClass: 'xxl', containerWidths: 1920 });

const Nosotros = () => {
    return (
        <div id="Nosotros">

            <div className="background-title">

            <h1 className="nosotros-title">Las chicas de ROJO</h1>
            
            </div>

            <div className="container-nosotros">

                <div className="nosotros-row">

                    <div className="nosotros-col">
                        <img src={TeamVicky} alt="Foto de la integrante Vicky"/>
                    </div>

                    <div className="nosotros-col">
                        <img src={TeamJuly} alt="Foto de la integrante July"/>
                    </div>

                    <div className="nosotros-col">
                        <img src={TeamNanu} alt="Foto de la integrante Nanu"/>
                    </div>

                </div>

            </div>
            {/* <Container className="container-nosotros">

                <Row className="nosotros-row">

                    <Col xxl={4} xl={4} lg={6} md={6} sm={12} xs={12} className="nosotros-col">
                        <img src={TeamVicky} alt=""/>
                    </Col>

                    <Col xxl={4} xl={4} lg={6} md={6} sm={12} xs={12} className="nosotros-col">
                        <img src={TeamJuly} alt="" />
                    </Col>

                    <Col xxl={4} xl={4} lg={6} md={6} sm={12} xs={12} className="nosotros-col">
                        <img src={TeamNanu} alt="" />
                    </Col>

                </Row>

            </Container> */}

        </div>
    )
}

export default Nosotros
