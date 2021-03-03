import React from "react";
import { NavLink } from "react-router-dom";
import "./Control.css";

function Control({
  textBtn,
  text,
  textLink,
  link,
  btnClass,
  btnType,
  linkClass,
  textClassModifier,
  controlClassModifier,
}) {
  return (
    <section className={`control ${controlClassModifier}`}>    
      <p className={`control__text ${textClassModifier}`}>{text}</p>
      <NavLink className={linkClass || "control__link"} to={link}>
        {textLink}
      </NavLink>
    </section>
  );
}

export default Control;
