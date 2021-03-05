import React from "react";
import "./Input.css";

function Input({
  labelName,
  labelFor,
  labelModifier,
  id,
  placeholder,
  type,
  minLength,
  maxLength,
  inputModifier,
}) {
  return (
    <>
      <label className={`label ${labelModifier}`} htmlFor={labelFor}>
        {labelName}
      </label>
      <input
        className={`input-field ${inputModifier}`}
        type={type}
        id={id}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
    </>
  );
}

export default Input;
