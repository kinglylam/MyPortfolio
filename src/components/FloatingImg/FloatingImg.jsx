import React from "react";
import "./FloatingImg.css";

const FloatingImg = ({ image, text1, text2 }) => {
  return (
    <div className="floating-img">
      <img src={image} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatingImg;
