"use client";
import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Layout from "../../../../containers/common/common-layout";
const Creative3 = () => (
  <Fragment>
    <Layout pathList={["portfolio", "trending layout 3"]} pathTitle="trending layout 3">
      <section className="portfolio-creative portfolio-section  creative2 creative3 p-0">
        <Container fluid={true}>
          <Row>
            <Col lg="6">
              <Row>
                <Col xs="12" className="p-0 isotopeSelector mb-0">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/1.jpg" />
                </Col>
                <Col xs="12">
                  <div className="portfolio-text d-flex">
                    <div className="flex-grow-1">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum is simply dummy text</h5>
                    </div>
                    <div className="text-end">
                      <a className="btn btn-default primary-btn rounded-0" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="p-0 isotopeSelector mb-0">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/2.jpg" />
                </Col>
                <Col xs="12">
                  <div className="portfolio-text d-flex">
                    <div className="flex-grow-1">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum is simply dummy text</h5>
                    </div>
                    <div className="text-end">
                      <a className="btn btn-default primary-btn rounded-0" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <Row>
                <Col xs="12" className="p-0 isotopeSelector order-lg-2 mb-0">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/3.jpg" />
                </Col>
                <Col xs="12">
                  <div className="portfolio-text d-flex">
                    <div className="flex-grow-1">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum is simply dummy text</h5>
                    </div>
                    <div className="text-end">
                      <a className="btn btn-default primary-btn rounded-0" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="p-0 isotopeSelector order-lg-2 mb-0">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/4.jpg" />
                </Col>
                <Col xs="12">
                  <div className="portfolio-text d-flex">
                    <div className="flex-grow-1">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum is simply dummy text</h5>
                    </div>
                    <div className="text-end">
                      <a className="btn btn-default primary-btn rounded-0" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  </Fragment>
);

export default Creative3;
