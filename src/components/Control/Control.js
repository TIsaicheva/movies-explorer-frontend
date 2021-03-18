import React from "react";
import "./Control.css";

function Control({  
  text,
  textLink,
  linkClass,
  textClassModifier,
  controlClassModifier,
  onClick,
}) {
  return (
    <section className={`control ${controlClassModifier}`}>    
      <p className={`control__text ${textClassModifier}`}>{text}</p>
      <a href="/" className={linkClass || "control__link"} onClick={onClick}>
        {textLink}
      </a>
    </section>
  );
}

export default Control;
