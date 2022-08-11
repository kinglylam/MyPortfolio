import React from "react";
import "./Toggle.css";

import { UilSun } from "@iconscout/react-unicons";
import { UilMoon } from "@iconscout/react-unicons";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clickHandler = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={clickHandler}>
      <UilMoon />
      <UilSun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
