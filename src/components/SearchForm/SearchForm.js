import React from "react";
import Toogle from "../Toogle/Toogle";
import "./SearchForm.css";
import Form from "../Form/Form";

function SearchForm() {
  return (
    <>
      <section className="searchForm">
        <Form
          children={
            <>
              <input
                type="text"
                className="input"
                placeholder="Фильм"
                required
              ></input>
              <div className="input__icon"></div>
            </>
          }
          formClassModifier="input__container"
          textBtn=""
          btnClass="input__icon-btn"
          btnType="submit"
        />
        <Toogle text="Короткометражки" />
      </section>
    </>
  );
}

export default SearchForm;
