import React from "react";
import "./Intro.css";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import Myself from "../../img/myself1.jpg";
import Vector1 from "../../img/Vector1.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesemoji from "../../img/glassesimoji.png";
import FloatingImg from "../FloatingImg/FloatingImg";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am </span>
          <span>Olaolu Adigun</span>
          <span>
            Fullstack Developer with experince using MERN in web development,
            producing Quality work
          </span>
        </div>
        <Link to="Contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a
            href="https://github.com/kinglylam"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <UilGithub size={"2em"} width="4rem" />
          </a>
          <a
            href="https://linkedin.com/in/olaolu-adigun-949647224"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <UilLinkedinAlt size={"2em"} width="4rem" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />

        <img
          src={Myself}
          alt=""
          width="320rem"
          heigth="320rem"
          style={{ borderRadius: "50%" }}
        />
        <img src={Glassesemoji} alt="" />
        <div style={{ top: "-4%", left: "69%" }}>
          <FloatingImg
            image={Thumbup}
            text1="FrontEnd"
            text2="Developer"
            className="floating-img"
          />
        </div>
        <div style={{ top: "17rem", left: "0rem" }}>
          <FloatingImg
            image={Crown}
            text1="BackEnd"
            text2="Developer"
            className="floating-img"
          />
        </div>
        <div
          className="blur-effect"
          style={{ backgroud: "rgba(238 210 255)" }}
        ></div>
        <div
          className="blur-effect"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "12rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
