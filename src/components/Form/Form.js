import React from "react";
import Button from "../Button/Button";
import Error from "../Error/Error";
import "./Form.css";

function Form({ children, formClassModifier, textBtn, btnClass, btnType, onSubmit, isValid, error, errorModifier }) {
  return (
      <form className={`form ${formClassModifier}`} onSubmit={onSubmit} noValidate>
        {children}
        <Error error={error} errorModifier={errorModifier} />
        <Button text={textBtn} btnClass={`${btnClass} ${!isValid && "btn_disabled"}`} btnType={btnType} />
      </form>
    );
}

export default Form;