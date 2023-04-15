import React from "react";
import "./HeroSection.css";
import '../App.css';
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Video/video-2.mp4" autoPlay loop muted />
      <h1 className="h1">Cables that don’t wear out</h1>
      <p className="p">Electrify your house with ultimate protection!</p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          VISIT US
        </Button> */}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          VISUAL VISIT <i class="fa-solid fa-eye"/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
