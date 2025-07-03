import React from "react";
import Slider from "./Slider/Slider";
import Section from "./Section/Section";
import Cards from "./cards/Cards";
import Promos from "./Promos/Promos";
import Testimonials from "./Testimonials/Testimonials";
import BestSeller from "./BestSellers/BestSeller";
import Delievery from "./Info/Delievery";
import { OurInfo } from "./Info/OurInfo";
import AppDownload from "./App/AppDownload";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Delievery />
      <OurInfo />
      <Cards />
      <Promos />
      <Section />
      <Testimonials />
      <BestSeller />
      <AppDownload />
      {/* <Our_Collection /> */}
    </>
  );
};

export default HomePage;
