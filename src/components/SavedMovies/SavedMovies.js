import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieThirtyThree from "../../images/33_word_big.svg";
import kinoalmanah from "../../images/kinoalmanah_big.svg";
import freedom from "../../images/Bancksy_big.svg";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <section className="savedMovies">
        <SearchForm />
        <MoviesCardList
          children={
            <>
              <MoviesCard
                name="33 слова о дизайне"
                duration="1ч 42м"
                posterName="Постер 33 слова о дизайне"
                link={movieThirtyThree}
                active={true}
                owner={false}
                moviesCardModifier="savedMovies__moviesCard"
                moviesImageModifier="savedMovies__moviesCard-image"
                moviesLikeModifier="savedMovies__moviesCard-like-icon"
                moviesContentModifier="savedMovies__moviesCard-content"
                moviesNameModifier="savedMovies__moviesCard-name"
                moviesDurationModifier="savedMovies__moviesCard-duration"
                moviesPosterModifier="savedMovies__moviesCard-poster"
              />
              <MoviesCard
                name="Киноальманах «100 лет дизайна»"
                duration="1ч 42м"
                posterName="Постер «100 лет дизайна»"
                link={kinoalmanah}
                active={true}
                owner={true}
                moviesCardModifier="savedMovies__moviesCard"
                moviesImageModifier="savedMovies__moviesCard-image"
                moviesLikeModifier="savedMovies__moviesCard-like-icon"
                moviesContentModifier="savedMovies__moviesCard-content"
                moviesNameModifier="savedMovies__moviesCard-name"
                moviesDurationModifier="savedMovies__moviesCard-duration"
                moviesPosterModifier="savedMovies__moviesCard-poster"
              />
              <MoviesCard
                name="Бег это свобода"
                duration="1ч 42м"
                posterName="Постер Бег это свобода"
                link={freedom}
                active={true}
                owner={false}
                moviesCardModifier="savedMovies__moviesCard"
                moviesImageModifier="savedMovies__moviesCard-image"
                moviesLikeModifier="savedMovies__moviesCard-like-icon"
                moviesContentModifier="savedMovies__moviesCard-content"
                moviesNameModifier="savedMovies__moviesCard-name"
                moviesDurationModifier="savedMovies__moviesCard-duration"
                moviesPosterModifier="savedMovies__moviesCard-poster"
              />
            </>
          }
          cardListModifier="savedMovies__moviesCardList"
        />
      </section>
    </>
  );
}

export default SavedMovies;
