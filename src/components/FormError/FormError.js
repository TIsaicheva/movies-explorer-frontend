import React from "react";
import "./FormError.css";

function FormError({ errMessage, errField, errModifier }) {
  return (
    <span
      className={`formError ${errModifier} ${errField && "formError_visible"}`}
    >
      {errMessage || ""}
    </span>
  );
}

export default FormError;
