import React from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";

const Services = () => {
  return (
    <div className="services" id="Services">
      <div className="formidable">
        <span>My Formidable</span>
        <span>Services</span>
        <span>
          I offer great services of web development for my client
          <br />A trial will convince you!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Resume</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "15rem" }}>
          <Card
            image={Heartemoji}
            heading={"Frontend"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            image={Glasses}
            heading={"Backend"}
            detail={"MongoDB, Nodejs, Express"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
