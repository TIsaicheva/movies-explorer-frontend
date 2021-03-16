import React from "react";
import "./MoviesCard.css";
import className from "classnames";
import getTimeFromMins from "../../utils/getTimeFromMins";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  POSTER_URL,
  NO_MOVIES_POSTER,
  DEFAULT_TRAILER,
  DEFAULT_DIRECTOR,
  DEFAULT_COUNTRY,
  DEFAULT_DESCRIPTION,
  DEFAULT_YEAR,
} from "../../utils/constants";

function MoviesCard(props) {
  const {
    card,
    onMovieLike,
    onDeleteClick,
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
  const currentUser = React.useContext(CurrentUserContext);

  const likeIconClassName = className("moviesCard__like-icon", {
    "moviesCard__like-icon_active": card.isSaved,
  });

  /* определить, принадлежит ли карточка текущему пользователю */
  const isOwner = currentUser.id === card.owner;
  const deleteIconClassName = className("moviesCard__delete", {
    moviesCard__delete_visible: isOwner,
  });

  const saveBtnModifier =
    card.isSaved && !card.owner ? moviesSavedModifier : moviesSaveModifier;

  function hadnleLikeClick() {
    onMovieLike({
      country: card.country || DEFAULT_COUNTRY,
      director: card.director || DEFAULT_DIRECTOR,
      duration: card.duration,
      year: card.year || DEFAULT_YEAR,
      description: card.description || DEFAULT_DESCRIPTION,
      image: `${POSTER_URL}${card.image.url}` || NO_MOVIES_POSTER,
      trailer: card.trailerLink || DEFAULT_TRAILER,
      nameRU: card.nameRU || card.nameEN,
      nameEN: card.nameEN || card.nameRU,
      thumbnail:
        `${POSTER_URL}${card.image.formats.thumbnail.url}` || NO_MOVIES_POSTER,
      movieId: card.id,
    });
  }

  function handleDeleteClick() {
    onDeleteClick(card);
  }

  return (
    <>
      <section className={`moviesCard ${moviesCardModifier}`}>
        <div className={`moviesCard__content ${moviesContentModifier}`}>
          <h3 className={`moviesCard__name ${moviesNameModifier}`}>
            {card.nameRU}
          </h3>
          <p className={`moviesCard__duration ${moviesDurationModifier}`}>
            {getTimeFromMins(card.duration)}
          </p>
          <button
            className={`${likeIconClassName} ${moviesLikeModifier}`}
            onClick={hadnleLikeClick}
          ></button>
        </div>
        <div className={`moviesCard__image ${moviesImageModifier}`}>
          <a
            className="moviesCard__poster-link"
            href={card.trailerLink || card.trailer || DEFAULT_TRAILER}
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt={`Постер ${card.nameRU}`}
              src={`${
                (card.owner && card.image) ||
                (card.image !== null
                  ? `${POSTER_URL}${card.image.url}`
                  : NO_MOVIES_POSTER)
              }`}
              className={`moviesCard__poster ${moviesPosterModifier}`}
            />
          </a>
          <button
            className={deleteIconClassName}
            onClick={handleDeleteClick}
          ></button>
          <button
            className={`moviesCard__save-btn ${saveBtnModifier}`}
            onClick={hadnleLikeClick}
          ></button>
        </div>
      </section>
    </>
  );
}

export default MoviesCard;
