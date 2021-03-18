import React from "react";
import headerPic from "../../images/header_pic.svg";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <article className="promo__content">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <NavTab />
        </article>
        <img
          alt="Изображение заголовка"
          src={headerPic}
          className="promo__img"
        />
      </div>
    </section>
  );
}

export default Promo;
