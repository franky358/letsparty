"use client";
import { useEffect } from "react";

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
