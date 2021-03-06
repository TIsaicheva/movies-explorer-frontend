import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieThirtyThree from "../../images/33_word.svg";
import kinoalmanah from "../../images/kinoalmanah.svg";
import bancksy from "../../images/Bancksy.svg";
import realBoom from "../../images/vzriv_realnosty.svg";
import freedom from "../../images/freedom.svg";
import kinotorgovzy from "../../images/kinotorgovzy.svg";
import aboutGermany from "../../images/about_germany.svg";
import "./Movies.css";
import Button from "../Button/Button";

function Movies({ movies }) {
  return (
    <>
      <section className="мovies">
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
                isaSved={true}
                moviesSaveModifier="мovies__moviesCard_save-visible"
                moviesSavedModifier="мovies__moviesCard_saved-visible"
                moviesCardModifier="мovies__moviesCard"
                moviesContentModifier="мovies__moviesCard-content"
                moviesImageModifier="мovies__moviesCard-image"
                moviesPosterModifier="мovies__moviesCard_poster"
                moviesLikeModifier="мovies__moviesCard-like-icon"
                moviesNameModifier="мovies__moviesCard-name"
                moviesDurationModifier="мovies__moviesCard-duration"
              />
              <MoviesCard
                name="Киноальманах «100 лет дизайна»"
                duration="1ч 42м"
                posterName="Постер «100 лет дизайна»"
                link={kinoalmanah}
                active={true}
                isaSved={true}
                moviesSaveModifier="мovies__moviesCard_save-visible"
                moviesSavedModifier="мovies__moviesCard_saved-visible"
                moviesCardModifier="мovies__moviesCard"
                moviesContentModifier="мovies__moviesCard-content"
                moviesImageModifier="мovies__moviesCard-image"
                moviesPosterModifier="мovies__moviesCard_poster"
                moviesLikeModifier="мovies__moviesCard-like-icon"
                moviesNameModifier="мovies__moviesCard-name"
                moviesDurationModifier="мovies__moviesCard-duration"
              />
              <MoviesCard
                name="В погоне за Бенкси"
                duration="1ч 42м"
                posterName="Постер В погоне за Бенкси"
                link={bancksy}
                active={false}
                isaSved={true}
                moviesSaveModifier="мovies__moviesCard_save-visible"
                moviesSavedModifier="мovies__moviesCard_saved-visible"
                moviesCardModifier="мovies__moviesCard"
                moviesContentModifier="мovies__moviesCard-content"
                moviesImageModifier="мovies__moviesCard-image"
                moviesPosterModifier="мovies__moviesCard_poster"
                moviesLikeModifier="мovies__moviesCard-like-icon"
                moviesNameModifier="мovies__moviesCard-name"
                moviesDurationModifier="мovies__moviesCard-duration"
              />
              <MoviesCard
                name="Баския: Взрыв реальности"
                duration="1ч 42м"
                posterName="Постер Баския: Взрыв реальности"
                link={realBoom}
                active={false}
                isaSved={false}
                moviesSaveModifier="мovies__moviesCard_save-visible"
                moviesSavedModifier="мovies__moviesCard_saved-visible"
                moviesCardModifier="мovies__moviesCard"
                moviesContentModifier="мovies__moviesCard-content"
                moviesImageModifier="мovies__moviesCard-image"
                moviesPosterModifier="мovies__moviesCard_poster"
                moviesLikeModifier="мovies__moviesCard-like-icon"
                moviesNameModifier="мovies__moviesCard-name"
                moviesDurationModifier="мovies__moviesCard-duration"
              />
              <MoviesCard
                name="Бег это свобода"
                duration="1ч 42м"
                posterName="Постер Бег это свобода"
                link={freedom}
                active={true}
                isaSved={false}
                moviesSaveModifier="мovies__moviesCard_save-visible"
                moviesSavedModifier="мovies__moviesCard_saved-visible"
                moviesCardModifier="мovies__moviesCard"
                moviesContentModifier="мovies__moviesCard-content"
                moviesImageModifier="мovies__moviesCard-image"
                moviesPosterModifier="мovies__moviesCard_poster"
                moviesLikeModifier="мovies__moviesCard-like-icon"
                moviesNameModifier="мovies__moviesCard-name"
                moviesDurationModifier="мovies__moviesCard-duration"
              />
              <MoviesCard
                name="Книготорговцы"
                duration="1ч 42м"
                posterName="Постер Книготорговцы"
                link={kinotorgovzy}
                active={false}
                isaSved={false}
                moviesSaveModifier="мovies__moviesCard_save-visible"
                moviesSavedModifier="мovies__moviesCard_saved-visible"
                moviesCardModifier="мovies__moviesCard"
                moviesContentModifier="мovies__moviesCard-content"
                moviesImageModifier="мovies__moviesCard-image"
                moviesPosterModifier="мovies__moviesCard_poster"
                moviesLikeModifier="мovies__moviesCard-like-icon"
                moviesNameModifier="мovies__moviesCard-name"
                moviesDurationModifier="мovies__moviesCard-duration"
              />
              <MoviesCard
                name="Когда я думаю о Германии ночью"
                duration="1ч 42м"
                posterName="Постер Когда я думаю о Германии ночью"
                link={aboutGermany}
                active={false}
                isaSved={false}
                moviesSaveModifier="мovies__moviesCard_save-visible"
                moviesSavedModifier="мovies__moviesCard_saved-visible"
                moviesCardModifier="мovies__moviesCard"
                moviesContentModifier="мovies__moviesCard-content"
                moviesImageModifier="мovies__moviesCard-image"
                moviesPosterModifier="мovies__moviesCard_poster"
                moviesLikeModifier="мovies__moviesCard-like-icon"
                moviesNameModifier="мovies__moviesCard-name"
                moviesDurationModifier="мovies__moviesCard-duration"
              />
            </>
          }
          cardListModifier="мovies__moviesCardList"
        />
        <Button text="Ещё" btnClass="мovies_btn" />
      </section>
    </>
  );
}

export default Movies;
