import { SHORT_MOVIE_DURATION } from "../utils/constants";

export function filterBySearchStr(movies, searchSrting) {    
  const filteredMovies = movies.filter((movie) => {
    return movie.nameRU.includes(searchSrting);
  });
  return filteredMovies;
}

export function filterByDuration(movies) {
  const shortFilm = movies.filter((movie) => {
    return movie.duration <= SHORT_MOVIE_DURATION;
  });
  return shortFilm;
}