import React from "react";
import Portfolio from "../../../../containers/portfolio/basic";
import { Row, Col } from "reactstrap";
const Section = ({ isEventPage }) => (
  <section className="resume portfolio-section zoom-gallery" id="eventos">
    <Row>
      <Col md="8" className="offset-md-2">
        <div className="title title2">
          <div className="sub-title">
            <div>
              <h2
                className="title-text"
                style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
              >
                {isEventPage
                  ? "Algunas de nuestras decoraciones"
                  : "Módulos del curso"}
              </h2>
              <p style={{ marginTop: "1rem" }}>Selecciona una categoría 👇</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Portfolio
      className="col-lg-3 col-sm-6 isotopeSelector"
      isEventPage={isEventPage}
    />
  </section>
);

export default Section;
