"use client";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../../../../containers/common/header";
import AboutSection from "../../../../containers/layouts/sections/event/about";
import Services from "@/containers/layouts/sections/app/services";
import Portfolio from "@/containers/layouts/sections/resume/section";
import About from "@/containers/layouts/sections/gym/about";

const Event = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#e3154f");
    document.body.style.setProperty("--secondary", "#321575");
    document.body.style.setProperty("--light", "#321575");
    document.body.style.setProperty("--dark", "#e3154f");
  });
  return (
    <div>
      <Head>
        <title>Events Layout </title>
      </Head>
      <Header className="event nav-lg" />

      <AboutSection />
      <Portfolio />
      <Services />
      <About />
    </div>
  );
};

export default Event;
