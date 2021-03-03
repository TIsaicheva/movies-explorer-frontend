import React from "react";
import "./MoviesCard.css";
import className from "classnames";

function MoviesCard(props) {
  const {
    name,
    duration,
    posterName,
    link,
    active,
    owner,
    isaSved,
    moviesCardModifier,
    moviesImageModifier,
    moviesPosterModifier,
    moviesLikeModifier,
    moviesContentModifier,
    moviesNameModifier,
    moviesSaveModifier,
    moviesSavedModifier,
    moviesDurationModifier,
  } = props;
  const likeIconClassName = className("moviesCard__like-icon", {
    "moviesCard__like-icon_active": active,
  });
  const deleteIconClassName = className("moviesCard__delete", {
    moviesCard__delete_visible: owner,
  });

  return (
    <>
      <section className={`moviesCard ${moviesCardModifier}`}>
        <div className={`moviesCard__content ${moviesContentModifier}`}>
          <h3 className={`moviesCard__name ${moviesNameModifier}`}>{name}</h3>
          <p className={`moviesCard__duration ${moviesDurationModifier}`}>
            {duration}
          </p>
          <div className={`${likeIconClassName} ${moviesLikeModifier}`}></div>
        </div>
        <div className={`moviesCard__image ${moviesImageModifier}`}>
          <video
            className={`moviesCard__poster ${moviesPosterModifier}`}
            poster={link}
            src="kino.mp4"
            type="video/mp4"
          ></video>
          <button className={deleteIconClassName}></button>
          <button
            className={`moviesCard__save ${!isaSved && moviesSaveModifier}`}
          ></button>
          <button
            className={`moviesCard__saved ${isaSved && moviesSavedModifier}`}
          ></button>
        </div>
      </section>
    </>
  );
}

export default MoviesCard;
