"use client";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../../../../containers/common/header";
import Header2 from "../../../../containers/common/header-2";

import AboutSection from "../../../../containers/layouts/sections/event/about";
import Services from "@/containers/layouts/sections/app/services";
import Portfolio from "@/containers/layouts/sections/resume/section";
import Banner from "@/containers/layouts/sections/resume/banner";
import About from "@/containers/layouts/sections/gym/about";

import Footer from "@/containers/layouts/sections/resume/footer";

const Event = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#FC75AB");
    document.body.style.setProperty("--secondary", "#000000");
    document.body.style.setProperty("--light", "#FF4191");
    document.body.style.setProperty("--dark", "#E90074");
  });
  return (
    <div>
      <Head>
        <title>Eventos</title>
      </Head>
      <Header2 className="event nav-lg" />
      <Banner isEventPage={true} />
      <Portfolio isEventPage={true} />
      <About isEventPage={true} />
      <Footer />
    </div>
  );
};

export default Event;
