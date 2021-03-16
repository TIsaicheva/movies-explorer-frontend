import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import "./SavedMovies.css";

function SavedMovies({
  savedMovies,
  count,
  onSearchMovies,
  onInputChange,
  onToggleChange,
  onButtonClick,
  onDeleteClick,
  moviesNotFound,
  isLoading,
}) {
  const moviesModifiers = {
    moviesSaveModifier: "",
    moviesSavedModifier: "",
    moviesCardModifier: "savedMovies__moviesCard",
    moviesContentModifier: "savedMovies__moviesCard-content",
    moviesImageModifier: "savedMovies__moviesCard-image",
    moviesPosterModifier: "savedMovies__moviesCard-poster",
    moviesLikeModifier: "savedMovies__moviesCard-like-icon",
    moviesNameModifier: "savedMovies__moviesCard-name",
    moviesDurationModifier: "savedMovies__moviesCard-duration",
  };

  function handleSearch(searchString) {
    onSearchMovies(searchString);
  }

  function handleToggleChange(e) {
    const eTarget = e.target.checked 
    onToggleChange(eTarget, true);
  }

  function handleClick() {
    onButtonClick();    
  }

  return (
    <>
      <section className="savedMovies">
        <SearchForm        
          onSearch={handleSearch}
          onInputChange={onInputChange}
          onToggleChange={handleToggleChange}
          moviesNotFound={moviesNotFound}
        />
        {isLoading && <Preloader/>}
        {savedMovies.length > 0 && (
          <MoviesCardList
            movieCards={savedMovies}
            cardListModifier="savedMovies__moviesCardList"
            moviesModifiers={moviesModifiers}
            onDeleteClick={onDeleteClick}
            isSaved={true}
          />
        )}
        <button
          className={`мovies_btn ${count <= savedMovies.length ? "мovies_btn_disabled" : ""}`}
          onClick={handleClick}
        >
          Все
        </button>   
      </section>
    </>
  );
}

export default SavedMovies;
