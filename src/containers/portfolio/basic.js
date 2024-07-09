import React, { useState, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import AllImgFun from "./Gallerys/allImgs";
import AroImgComponent from "./Gallerys/aroImgs";
import ParedImgComponent from "./Gallerys/paredImgs";
import ShimmerImgComponent from "./Gallerys/shimmerImgs";
import MamparaImgComponent from "./Gallerys/mamparaImg";
import AroConLonaImgComponent from "./Gallerys/aroLonaImgs";
import MesaDulcesImgComponent from "./Gallerys/mesaImgs";
import {
  AllImgData,
  AroImgData,
  ParedImgData,
  ShimmerImgData,
  MamparaImgData,
  AroConLonaImgData,
  MesaDulcesImgData,
} from "./database";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const ITEMS_PER_PAGE = 6;

const Basic = ({ className, title, subTitle, fluid }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  const getDataByTab = (tab) => {
    switch (tab) {
      case "1":
        return ParedImgData;
      case "2":
        return AroImgData;
      case "3":
        return MamparaImgData;
      case "4":
        return ShimmerImgData;
      case "5":
        return AroConLonaImgData;
      case "6":
        return MesaDulcesImgData;

      default:
        return [];
    }
  };

  useEffect(() => {
    const data = getDataByTab(activeTab);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginated = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    console.log("Data:", data);
    console.log("Start Index:", startIndex);
    console.log("Paginated Data:", paginated);
    setPaginatedData(paginated);
  }, [activeTab, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const totalPages = Math.ceil(getDataByTab(activeTab).length / ITEMS_PER_PAGE);

  const handlePageChange = (page, event) => {
    event.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      document
        .getElementById("portafolio")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const renderComponentByTab = () => {
    switch (activeTab) {
      case "1":
        return (
          <ParedImgComponent
            data={paginatedData}
            className={className}
            title={title}
            subTitle={subTitle}
          />
        );
      case "2":
        return (
          <AroImgComponent
            data={paginatedData}
            className={className}
            title={title}
            subTitle={subTitle}
          />
        );
      case "3":
        return (
          <MamparaImgComponent
            data={paginatedData}
            className={className}
            title={title}
            subTitle={subTitle}
          />
        );
      case "4":
        return (
          <ShimmerImgComponent
            data={paginatedData}
            className={className}
            title={title}
            subTitle={subTitle}
          />
        );
      case "5":
        return (
          <AroConLonaImgComponent
            data={paginatedData}
            className={className}
            title={title}
            subTitle={subTitle}
          />
        );
      case "6":
        return (
          <MesaDulcesImgComponent
            data={paginatedData}
            className={className}
            title={title}
            subTitle={subTitle}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="portafolio"
      className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles"
    >
      <div className="filter-section">
        <Container fluid={true}>
          <Row>
            <Col xs="12">
              <Nav tabs className="filter-container isotopeFilters">
                <NavItem className="list-inline filter">
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => handleTabChange("1")}
                  >
                    Pared de Globos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => handleTabChange("2")}
                  >
                    Aro
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => handleTabChange("3")}
                  >
                    Mampara
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "4" ? "active" : ""}
                    onClick={() => handleTabChange("4")}
                  >
                    Shimmer
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "5" ? "active" : ""}
                    onClick={() => handleTabChange("5")}
                  >
                    Aro con Lona
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "6" ? "active" : ""}
                    onClick={() => handleTabChange("6")}
                  >
                    Mesa de Dulces
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={fluid || "container"}>
        <TabContent className="isotopeContainer row" activeTab={activeTab}>
          <TabPane className="row" tabId={activeTab}>
            {renderComponentByTab()}
          </TabPane>
        </TabContent>
      </div>
      {/* <!-- pagination Start --> */}
      <div className="pagination_sec">
        <div className="content_detail__pagination cdp">
          <ul>
            <li>
              <a
                className={`prev ${currentPage === 1 ? "disabled" : ""}`}
                onClick={(e) => handlePageChange(currentPage - 1, e)}
                href="#portafolio"
              >
                <i aria-hidden="true" className="fa fa-angle-double-left"></i>
              </a>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <a
                  className={
                    currentPage === index + 1 ? "active cdp_i" : "cdp_i"
                  }
                  onClick={(e) => handlePageChange(index + 1, e)}
                  href="#portafolio"
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                className={`next ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={(e) => handlePageChange(currentPage + 1, e)}
                href="#portafolio"
              >
                <i aria-hidden="true" className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- pagination End --> */}
    </section>
  );
};

export default Basic;
