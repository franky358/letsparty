import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

const About = ({ isEventPage }) => (
  <section className="gym format" id="aboutme">
    <Container>
      <Row>
        <Col md="6">
          <div className="text-center center-content">
            <div className="about-img">
              <div className="borders-around">
                <div>
                  <div className="bg-black"></div>
                </div>
                <img
                  alt=""
                  className="img-fluid format-img"
                  src={
                    isEventPage
                      ? "/assets/images/pandingo2.jpg"
                      : "/assets/images/pandingo.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="center-text">
            <div>
              <div className="format-small-text"></div>
              <div className="format-head-text">
                <h3 className="about-font-header gradient-text">
                  Acerca de mí
                </h3>
              </div>
              <div
                className="format-sub-text"
                style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
              >
                {isEventPage ? (
                  <>
                    <p
                      className="p-light about-para"
                      style={{ textAlign: "justify" }}
                    >
                      Hola, soy Karen. Desde niña, siempre me ha fascinado cómo
                      un toque especial puede{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        transformar
                      </strong>{" "}
                      cualquier evento en algo{" "}
                      <strong style={{ fontWeight: "bold" }}>mágico</strong>.
                      Esta{" "}
                      <strong style={{ fontWeight: "bold" }}>pasión</strong> me
                      llevó a certificarme como Wedding & Event Planner, y en
                      noviembre de 2020, decidí hacer realidad un sueño: crear{" "}
                      <a
                        href="https://www.instagram.com/letspartyevents_mx/"
                        target="_blank"
                        style={{
                          color: "#ff549a",
                          textDecoration: "underline",
                        }}
                      >
                        <strong style={{ fontWeight: "bold" }}>
                          Let’s Party
                        </strong>
                      </a>
                      . Comencé con servicios de{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        pícnic y tepee
                      </strong>
                      , y rápidamente amplié mi oferta a{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        eventos infantiles
                      </strong>
                      ,{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        mesas de dulces
                      </strong>{" "}
                      y{" "}
                      <strong style={{ fontWeight: "bold" }}>backdrops</strong>.
                    </p>

                    <p
                      className="p-light about-para"
                      style={{ textAlign: "justify" }}
                    >
                      Al día de hoy, ofrecemos servicios de decoración de
                      eventos con globos para todo tipo de celebraciones, ya
                      sean <strong style={{ fontWeight: "bold" }}>bodas</strong>
                      ,
                      <strong style={{ fontWeight: "bold" }}>
                        {" "}
                        cumpleaños
                      </strong>
                      ,
                      <strong style={{ fontWeight: "bold" }}>
                        {" "}
                        fiestas infantiles,
                      </strong>{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        {" "}
                        baby showers,
                      </strong>{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        {" "}
                        gender reveal,
                      </strong>{" "}
                      o cualquier evento especial.
                    </p>
                    <p
                      className="p-light about-para"
                      style={{ textAlign: "justify" }}
                    >
                      Permítenos hacer de tu próximo evento, algo inolvidable
                      con nuestros increíbles diseños de globos. ¡Contáctanos y
                      deja la magia de tu evento en nuestras manos!
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="p-light about-para"
                      style={{ textAlign: "justify" }}
                    >
                      Mi nombre es Karen, desde pequeña, siempre me ha fascinado
                      cómo un toque especial puede{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        transformar
                      </strong>{" "}
                      un espacio ordinario en algo{" "}
                      <strong style={{ fontWeight: "bold" }}>mágico</strong>.
                      Esa
                      <strong style={{ fontWeight: "bold" }}> pasión</strong> me
                      llevó a certificarme como Wedding & Event Planner, y en
                      noviembre de 2020, decidí hacer realidad un sueño: crear
                      <a
                        href="https://www.instagram.com/letspartyevents_mx/"
                        target="_blank"
                        style={{
                          color: "#ff549a",
                          textDecoration: "underline",
                        }}
                      >
                        <strong style={{ fontWeight: "bold" }}>
                          {" "}
                          Let’s Party
                        </strong>
                      </a>
                      . Comencé con servicios de{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        pícnic y tepee
                      </strong>
                      , y rápidamente amplié mi oferta a{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        eventos infantiles
                      </strong>
                      ,{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        mesas de dulces
                      </strong>{" "}
                      y{" "}
                      <strong style={{ fontWeight: "bold" }}>backdrops</strong>.
                    </p>
                    <p
                      className="p-light about-para"
                      style={{ textAlign: "justify" }}
                    >
                      La verdadera{" "}
                      <strong style={{ fontWeight: "bold" }}>alegría</strong>{" "}
                      vino cuando decidí compartir mi pasión y conocimientos con
                      otros. Creé un manual lleno de técnicas y secretos que he
                      perfeccionado con los años. Mi primer curso de decoración
                      fue un éxito, y ver a mis alumnos{" "}
                      <strong style={{ fontWeight: "bold" }}>aprender</strong> y{" "}
                      <strong style={{ fontWeight: "bold" }}>crecer </strong>
                      fue increíblemente gratificante.
                    </p>
                    <p
                      className="p-light about-para"
                      style={{ textAlign: "justify" }}
                    >
                      Hoy, ofrezco cursos para todos los que quieran aprender el
                      arte de la decoración, ya sea para sus{" "}
                      <strong style={{ fontWeight: "bold" }}>negocios</strong> o
                      para hacer de sus eventos personales algo{" "}
                      <strong style={{ fontWeight: "bold" }}>
                        inolvidable
                      </strong>{" "}
                      . ¡Únete a nuestro curso y convierte tus sueños
                      decorativos en realidad!
                    </p>
                  </>
                )}
              </div>

              <h3 style={{ marginBottom: "2rem" }}>
                {isEventPage
                  ? "¡Decoramos con el corazón y se nota en todas nuestras decoraciones!"
                  : "Aprender para emprender!"}
              </h3>
              <a
                className="btn btn-default primary-btn"
                href="https://api.whatsapp.com/send?phone=+525554699114&text=Quiero%20informaci%C3%B3n%20del%20curso%20de%20decoraci%C3%B3n%20%F0%9F%8E%88"
              >
                Pedir Informes <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
