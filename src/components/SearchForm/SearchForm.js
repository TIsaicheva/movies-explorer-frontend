import React from "react";
import Toogle from "../Toogle/Toogle";
import "./SearchForm.css";
import FormError from "../FormError/FormError";
import { useFormValidation } from "../../hooks/useFormValidation";
import Form from "../Form/Form";

function SearchForm({ onSearch, onInputChange, onToggleChange, moviesNotFound }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
    onSearch(values.searchString);
  }

  return (
    <>
      <section className="searchForm">
        <Form
          error=""
          errorModifier=""
          onSubmit={handleSubmit}
          isValid={isValid}
          children={
            <>
              <input
                type="text"
                className="input"
                placeholder="Фильм"
                name="searchString"
                value={values.searchString || ""}
                onChange={handleChange}      
                required
              ></input>
              <div className="input__icon"></div>
              <FormError
                errMessage={errors.searchString}
                errField={errors.searchString}
                errModifier="searchForm_error"
              />
            </>
          }
          formClassModifier="input__container"
          textBtn=""
          btnClass="input__icon-btn"
          btnType="submit"
        />
        <Toogle text="Короткометражки" onToggleChange={onToggleChange} />
        <span
          className={`notFound__error ${
            moviesNotFound && "notFound__error_visible"
          }`}
        >
          Ничего не найдено
        </span>
      </section>
    </>
  );
}

export default SearchForm;
