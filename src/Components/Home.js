import React from "react";
import "../App.css";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
// import "./Home.css";
// import { Button } from "react-bootstrap";
import About from "./About";
import Client from "./Client";
import Certificate from "./Certificate";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <About />
      {/* <Certificate /> */}
      <Client />
      <Contact />
    </>
  );
}

export default Home;
