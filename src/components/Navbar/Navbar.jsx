import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-body">
      <div className="nav-left">
        <span className="n-name"> Olaolu</span>
        <Toggle />
      </div>
      <div className="nav-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              activeClass="activeClass"
              smooth={true}
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} smooth={true} to="Contact">
          <button className="button nav-button"> contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
