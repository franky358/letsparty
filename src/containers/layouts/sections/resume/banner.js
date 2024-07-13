import React from "react";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "reactstrap";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

const Banner = () => (
  <section
    className="resume header"
    id="letsparty"
    style={{ background: "#E90074" }}
  >
    <div className="header7-content">
      <div className="resume bg bg-pink">
        <Container>
          <Row>
            <Col lg="6" md="6" className="offset-lg-1">
              <div className="center-text">
                <div>
                  <div className="header-text" style={{ marginTop: "2rem" }}>
                    <h1>
                      <span style={{ fontWeight: "bold" }}>
                        Decoraciones con globos
                      </span>
                    </h1>
                  </div>
                  <div
                    className="header-sub-text"
                    style={{
                      marginTop: "2rem",
                      height: "48px",
                    }}
                  >
                    <h4 className="font-secondary d-flex">
                      <span className="">
                        <Typewriter
                          options={{
                            strings: [
                              "Backdrops, Candy Bar, Tepee & Picnic, Table Styling",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </h4>
                  </div>
                  <div className="header-sub-text">
                    <p className="font-secondary font-large">
                      Con un toque especial y con mucho amor en lo que hacemos,
                      lograremos transformar tu espacio en algo mágico
                    </p>
                  </div>
                  <div className="link-horizontal">
                    <ul>
                      <li>
                        <a
                          className="btn btn-default primary-btn"
                          href={
                            isEventPage
                              ? "https://api.whatsapp.com/send?phone=+525554699114&text=Quiero%20una%20cotizaci%C3%B3n%20%F0%9F%8E%88"
                              : "https://api.whatsapp.com/send?phone=+525554699114&text=Quiero%20informaci%C3%B3n%20del%20curso%20de%20decoraci%C3%B3n%20%F0%9F%8E%88"
                          }
                        >
                          Pedir Informes <FaWhatsapp size={16} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </section>
);

export default Banner;
