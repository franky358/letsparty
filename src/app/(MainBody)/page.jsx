"use client";
import { useEffect } from "react";
import BlogSection from "../../containers/landing/blog";
import DemoSection from "../../containers/landing/demo";
import ElementSection from "../../containers/landing/elements";
import FeaturesSection from "../../containers/landing/features";
import FooterSection from "../../containers/landing/footer";
import GiftSection from "../../containers/landing/git-section";
import Header from "../../containers/landing/header";
import PortfolioSection from "../../containers/landing/portfolio";
import RatSection from "../../containers/landing/rat";
import TestimonialSection from "../../containers/landing/testimonial";
import WhatinsideSection from "../../containers/landing/whatinside";
import Event from "./layouts/event/page";

const Portfolio = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#FC75AB");
    document.body.style.setProperty("--secondary", "#000000");
    document.body.style.setProperty("--light", "#FF4191");
    document.body.style.setProperty("--dark", "#E90074");
  });
  return (
    <>
      <Event />
    </>
  );
};

export default Portfolio;
