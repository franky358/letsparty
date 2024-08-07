"use client";
import React from "react";
import Masonry from "react-masonry-css";
import { Col, Container, Row } from "reactstrap";
import CardWrapper from "../../../../../containers/blog/card/grid-wrapper";
import Categories from "../../../../../containers/blog/categories";
import Instagram from "../../../../../containers/blog/instagram";
import NewsLetter from "../../../../../containers/blog/newsletter";
import PopularPosts from "../../../../../containers/blog/posts";
import CommonLayout from "../../../../../containers/common/common-layout";
import { MesonryData } from "../../../../../database/blog/database";

const MasonaryRightSidebar = () => {
  const breakpointColumnsObj = {
    default: 2,
    767: 1,
  };
  return (
    <CommonLayout pathList={["blog", "blog Masonry", "right sidebar"]} pathTitle="BLOG WITH right-sidebar">
      <section className="agency blog blog-sec blog-sidebar">
        <Container>
          <Row>
            <Col lg="9">
              <div>
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid masonry-with-dec row" columnClassName="col-md-6 col-12">
                  {MesonryData.length > 0 ? MesonryData.map((item, index) => <CardWrapper key={`grid-no-sidebar-${index}`} className="" image={item.image} blogDate={item.createdAt} place={item.place} title={item.title} description={item.description} readUrl={item.readUrl} />) : "!! No Blogs Found"}
                </Masonry>
              </div>
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
  );
};

export default MasonaryRightSidebar;
