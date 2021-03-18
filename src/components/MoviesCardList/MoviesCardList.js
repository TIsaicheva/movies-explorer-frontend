import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { INITIAL_COUNT_MOVIES } from "../../utils/constants";

function MoviesCardList({
  movieCards,
  cardListModifier,
  onMovieLike,
  moviesModifiers,
  onDeleteClick,
  isSaved,
}) {
  const {
    moviesSaveModifier,
    moviesSavedModifier,
    moviesCardModifier,
    moviesContentModifier,
    moviesImageModifier,
    moviesPosterModifier,
    moviesLikeModifier,
    moviesNameModifier,
    moviesDurationModifier,
  } = moviesModifiers;

  const countHiddenMovies = isSaved ? movieCards.length : INITIAL_COUNT_MOVIES;
  
  return (
    <>
      <section className={`moviesCardList ${cardListModifier}`}>
        {movieCards.map((card, indexMovie) => {
          return (
            <MoviesCard
              key={card.id || card._id}
              card={card}
              onMovieLike={onMovieLike}
              onDeleteClick={onDeleteClick}
              isaSved={true}    
              moviesSaveModifier={moviesSaveModifier}
              moviesSavedModifier={moviesSavedModifier}
              moviesCardModifier={`${moviesCardModifier} ${
                indexMovie > countHiddenMovies ? "moviesCard_hidden" : ""
              }`}
              moviesContentModifier={moviesContentModifier}
              moviesImageModifier={moviesImageModifier}
              moviesPosterModifier={moviesPosterModifier}
              moviesLikeModifier={moviesLikeModifier}
              moviesNameModifier={moviesNameModifier}
              moviesDurationModifier={moviesDurationModifier}
            />
          );
        })}
      </section>
    </>
  );
}

export default MoviesCardList;
