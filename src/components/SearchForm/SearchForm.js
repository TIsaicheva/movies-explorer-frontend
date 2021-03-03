import React from "react";
import Toogle from "../Toogle/Toogle";
import "./SearchForm.css";

function SearchForm() {
  return (
    <>
      <section className="searchForm">
        <h3 className="searchForm__title">Фильм</h3>
        <div className="input__container">
          <input type="text" className="input"></input>
          <div className="input__icon"></div>
          <button className="input__icon-btn"></button>
        </div>
        <Toogle text="Короткометражки" />
      </section>
    </>
  );
}

export default SearchForm;
