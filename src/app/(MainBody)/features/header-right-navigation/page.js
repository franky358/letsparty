"use client";
import Head from "next/head";
import React, { useEffect } from "react";
// import Custom Components
import Header from "../../../../containers/common/header";
import BannerSection from "../../../../containers/layouts/sections/index/banner";

const HeaderRightNavigation = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#357fef");
    document.body.style.setProperty("--secondary", "#4e4e4e");
    document.body.style.setProperty("--light", "#13B8EA");
    document.body.style.setProperty("--dark", "#4E56F3");
  });
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header className="app1" />
      <div className="feature-header">
        <BannerSection />
      </div>
    </div>
  );
};

export default HeaderRightNavigation;
