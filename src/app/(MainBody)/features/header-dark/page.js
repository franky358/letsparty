"use client";
import React, { useEffect } from "react";
import Head from "next/head";
// import Custom Components
import Header from "../../../../containers/common/header";
import BannerSection from "../../../../containers/layouts/sections/gym/banner";

const HeaderDark = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#000");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <div>
      <Head>
        <title>Gym Layout </title>
      </Head>
      <Header />
      <div className="feature-header">
        <BannerSection />
      </div>
    </div>
  );
};

export default HeaderDark;
