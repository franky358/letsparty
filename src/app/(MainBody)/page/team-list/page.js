"use client";
import { Col, Container, Row } from "reactstrap";
import Layout from "../../../../containers/common/common-layout";
import { AgencyData } from "../../../../database/pages/team/database";
const TeamList = () => (
  <Layout pathList={["pages", "team", "team list"]} pathTitle="team list">
    <section className="event team-sec team-grid speaker position-relative" id="speaker">
      <Container>
        <Row>
          {AgencyData.map((data, i) => {
            return (
              <Col lg="10" className="speker-container" key={i}>
                <div className="d-flex">
                  <div className="team-img">
                    <img alt="" className="img-fluid" src={data.img} />
                    <div className="overlay"></div>
                    <div className="social">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://accounts.google.com/">
                            <i aria-hidden="true" className="fa fa-google center-content"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.globe.gov/">
                            <i aria-hidden="true" className="fa fa-globe center-content"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="employee">
                    <h5 className="e-name text-center">{data.name}</h5>
                    <h6 className="post text-center ">{data.role}</h6>
                    <p className="team-para ">{data.desc}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  </Layout>
);
export default TeamList;
