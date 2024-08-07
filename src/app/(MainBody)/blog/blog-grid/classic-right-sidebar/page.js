"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BlogsData } from "../../../../../database/blog/database";
// import Custom Components
import CardWrapper from "../../../../../containers/blog/card/grid-wrapper";
import Categories from "../../../../../containers/blog/categories";
import Instagram from "../../../../../containers/blog/instagram";
import NewsLetter from "../../../../../containers/blog/newsletter";
import PopularPosts from "../../../../../containers/blog/posts";
import CommonLayout from "../../../../../containers/common/common-layout";

const ClassicRightSidebar = ({}) => (
  <>
    <CommonLayout pathList={["blog", "blog grid view", "full width right sidebar"]} pathTitle="BLOG FULL WIDTH WITH RIGHT-SIDEBAR">
      <section className="agency blog blog-sec blog-sidebar">
        <Container>
          <Row>
            <Col lg="9">
              <Row>{BlogsData.length > 0 ? BlogsData.slice(0, 3).map((item, index) => <CardWrapper key={`grid-no-sidebar-${index}`} className="col-12" image={item.image} blogDate={item.createdAt} place={item.place} title={item.title} description={item.description} readUrl={item.readUrl} />) : "!! No Blogs Found"}</Row>
            </Col>
            <Col lg="3">
              <div className="blog-side">
                <Categories />
                <PopularPosts />
                <NewsLetter />
                <Instagram />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  </>
);

export default ClassicRightSidebar;
