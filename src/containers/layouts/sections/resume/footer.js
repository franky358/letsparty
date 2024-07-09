import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => (
  <footer className="resume copyright copyright-bg">
    <Container>
      <Row>
        <Col xs="12">
          <div className="text-center">
            <div className="social-link link-horizontal">
              <ul className="justify-content-center">
                <li>
                  <a
                    className="copyright-text "
                    href="https://www.instagram.com/letspartyevents_mx/"
                    target="_blank"
                  >
                    <i aria-hidden="true" className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="copyright-text"
                    href="https://www.facebook.com/letspartyeventsmx?mibextid=LQQJ4d&rdid=QtmdRJwo7WjFPLjW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Frc2EVFu8YM96MoXJ%2F%3Fmibextid%3DLQQJ4d"
                    target="_blank"
                  >
                    <i aria-hidden="true" className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <div className="m-l-auto center-para">
            <h6 className="copyright-text text-center">
              © 2024 Let's Party Events - Todos los derechos reservados
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
