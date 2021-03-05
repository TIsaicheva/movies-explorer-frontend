import React from "react";
import "./Toogle.css";

function Toogle({ text }) {
  return (
    <div className="toogle">
      <input className="toogle__input" type="checkbox" id="switcher" />
      <label className="toogle__label" htmlFor="switcher">{text}</label>    
    </div>
  );
}

export default Toogle;
