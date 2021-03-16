import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import "./Movies.css";

function Movies({
  movies,
  onSearchMovies,
  onInputChange,
  onToggleChange,
  showMovies,
  moviesNotFound,
  onButtonClick,
  showMoreBtn,
  onMovieLike,
  isLoading,
}) {
  const moviesModifiers = {
    moviesSaveModifier: "moviesCard__save-btn_keep",
    moviesSavedModifier: "moviesCard__save-btn_keeped",
    moviesCardModifier: "мovies__moviesCard",
    moviesContentModifier: "мovies__moviesCard-content",
    moviesImageModifier: "мovies__moviesCard-image",
    moviesPosterModifier: "мovies__moviesCard_poster",
    moviesLikeModifier: "мovies__moviesCard-like-icon",
    moviesNameModifier: "мovies__moviesCard-name",
    moviesDurationModifier: "мovies__moviesCard-duration",
  };  

  function handleClick() {
    onButtonClick();
  }

  function handleToggleChange(e) {
    const eTarget = e.target.checked 
    onToggleChange(eTarget, false);  
  } 

  return (
    <>
      <section className="мovies">
        <SearchForm        
          onSearch={onSearchMovies}
          onInputChange={onInputChange}
          onToggleChange={handleToggleChange}
          moviesNotFound={moviesNotFound}
        />
        {isLoading && <Preloader/>}
        {showMovies && (
          <MoviesCardList
            movieCards={movies}
            cardListModifier="мovies__moviesCardList"
            onMovieLike={onMovieLike}
            moviesModifiers={moviesModifiers}
            isSaved={false}
          />
        )}      
        <button
          className={`мovies_btn ${showMoreBtn ? "мovies_btn_disabled" : ""}`}
          onClick={handleClick}
        >
          Ещё
        </button>
      </section>
    </>
  );
}

export default Movies;
