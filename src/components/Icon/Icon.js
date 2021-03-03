import React from "react";
import "./Icon.css";

function Icon({ iconClass }) {
  return (
    <>
      <input type="checkbox" id="btn" />
      <label className="icon" htmlFor="btn">
        <div className={iconClass}></div>
      </label>
    </>
  );
}

export default Icon;
