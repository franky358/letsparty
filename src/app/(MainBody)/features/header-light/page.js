"use client";
import Head from "next/head";
import { useEffect } from "react";
// import Custom Components
import Header from "../../../../containers/common/header";
import BannerSection from "../../../../containers/layouts/sections/resume/banner";

const HeaderLight = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#1f232c");
    document.body.style.setProperty("--secondary", "#676767");
    document.body.style.setProperty("--light", "#000");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <div>
      <Head>
        <title>Resume Layout </title>
      </Head>
      <Header className="dark agency" />
      <div className="feature-header">
        <BannerSection />
      </div>
    </div>
  );
};

export default HeaderLight;
