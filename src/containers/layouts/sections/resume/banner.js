import Realistic from "react-canvas-confetti/dist/presets/realistic";

import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "reactstrap";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

const Banner = ({ isEventPage }) => {
  const words = isEventPage
    ? ["Backdrops, Candy Bar, Tepee & Picnic, Table Styling"]
    : ["Fecha 17 de agosto, CDMX centro "];

  return (
    <section
      className="resume header"
      id="letsparty"
      style={{ background: "#E90074" }}
    >
      <Realistic autorun={{ speed: 0.3, duration: "5000", delay: "500" }} />{" "}
      <div className="header7-content">
        <div className="resume bg bg-pink">
          <Container>
            <Row>
              <Col lg="6" md="6" className="offset-lg-1">
                <div className="center-text">
                  <div>
                    <div className="header-text" style={{ marginTop: "3rem" }}>
                      <h1>
                        <span style={{ fontWeight: "bold" }}>
                          {isEventPage
                            ? "Decoraciones con globos en CDMX 🎈"
                            : "Curso de Backdrops y Candy Bar 🎈"}
                        </span>
                      </h1>
                    </div>
                    <div
                      className="header-sub-text"
                      style={{
                        marginTop: "2rem",
                      }}
                    >
                      <h4 className="font-secondary d-flex">
                        <span style={{ height: isEventPage ? "50px" : "auto" }}>
                          <Typewriter
                            options={{
                              strings: words,
                              autoStart: true,
                              loop: true,
                            }}
                          />
                        </span>
                      </h4>
                    </div>
                    <div className="header-sub-text">
                      {isEventPage && (
                        <p className="font-secondary font-large">
                          Con un toque especial y con mucho amor en lo que
                          hacemos, lograremos transformar tu espacio en algo
                          mágico
                        </p>
                      )}
                      {!isEventPage && (
                        <p className="font-secondary font-large">
                          Te enseñaremos a crear{" "}
                          <strong style={{ fontWeight: "bold" }}>
                            decoraciones con globos
                          </strong>{" "}
                          desde cero
                        </p>
                      )}
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
};

export default Banner;
