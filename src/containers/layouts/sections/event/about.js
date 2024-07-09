import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

const About = () => (
  <section className="event about bg-about">
    <Container>
      <Row style={{ marginTop: "46px" }}>
        <Col md="10" className="offset-md-1">
          <div className="title title3 only-title">
            <div className="main-title">
              <h2 className=" text-white">CURSO DE BACKDROPS Y CANDY BAR 🎈</h2>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="offset-lg-1">
          <div className="text-end">
            <div className="announcer-img">
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/event/pandingo.jpg"
              />
              <img
                alt=""
                className="img-fluid"
                src="/assets/images/event/pandingo.jpg"
              />
              <img
                alt=""
                className="img-fluid"
                data-tilt
                data-tilt-max="3"
                data-tilt-perspective="500"
                data-tilt-speed="400"
                src="/assets/images/event/event-main.jpg"
              />
            </div>
          </div>
        </Col>
        <Col xl="5" lg="7" md="6" className="offset-xl-1">
          <div className="abouts center-text">
            <div className="format">
              <div className="format-small-text">
                <h6
                  style={{ color: "#FFF078" }}
                  className="borders-before text-uppercase"
                >
                  <span>🗓️ Fecha 17 de agosto 📍 CDMX centro </span>
                </h6>
              </div>
              <div className="format-head-text">
                <h3 className="about-font-header text-white">
                  Te enseñaremos a crear decoraciones con globos desde cero
                  aplicadas en 2 módulos:
                </h3>
              </div>
              <div className="format-sub-text">
                <ul className="event-list">
                  <li>
                    <strong style={{ fontSize: "16px" }}>Backdrop:</strong>{" "}
                    Pared de globos, aro, aro con lona, mampara y shimmer wall.{" "}
                  </li>
                  <li>
                    <strong style={{ fontSize: "16px" }}>
                      {" "}
                      Mesa de dulces:
                    </strong>{" "}
                    Básica, intermedia y personalizada.
                  </li>
                </ul>
              </div>
              <a
                className="btn btn-default "
                href="https://api.whatsapp.com/send?phone=+525554699114&text=Quiero%20informaci%C3%B3n%20del%20curso%20de%20decoraci%C3%B3n%20%F0%9F%8E%88"
              >
                Pedir Informes <FaWhatsapp size="16" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
