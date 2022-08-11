import React from "react";
import "./Footer.css";
import { UilGithub } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="background"></div>
      <div className="f-content">
        <span>olaoluafolami@gmail.com</span>
        <div className="f-icons">
          <a href="https://twitter.com/olaoluafolami">
            <UilTwitter color="white" size="3rem" />
          </a>
          <a href="https://github.com/kinglylam">
            <UilGithub color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
