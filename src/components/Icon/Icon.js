import React from "react";
import "./Icon.css";

function Icon({ iconClass }) {
  return (
    <>
      <input type="checkbox" id="icon-btn" />
      <label className="icon" htmlFor="icon-btn">
        <span className={iconClass}></span>
      </label>
    </>
  );
}

export default Icon;
