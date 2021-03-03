import React from "react";
import "./MoviesCardList.css";

function MoviesCardList({ children, cardListModifier }) {
  return (
    <>
      <section className={`moviesCardList ${cardListModifier}`}>
        {children}
      </section>
    </>
  );
}

export default MoviesCardList;
