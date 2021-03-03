import React from "react";
import './Button.css';

function Button({ text, btnClass, btnType }) {
  return (
    <>
      <button className={`btn ${btnClass}`} type={btnType}>{text}</button>
    </>
  );
}

export default Button;