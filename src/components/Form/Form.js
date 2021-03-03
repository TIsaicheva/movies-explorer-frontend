import React from "react";
import Button from "../Button/Button";
import "./Form.css";

function Form({ children, formClassModifier, textBtn, btnClass, btnType }) {
  return (
      <form className={`form ${formClassModifier}`}>
        {children}
        <Button text={textBtn} btnClass={btnClass} btnType={btnType} />
      </form>
    );
}

export default Form;