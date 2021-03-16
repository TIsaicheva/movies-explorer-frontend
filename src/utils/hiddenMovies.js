import { MEDIUM_WINDOW, SMALL_WINDOW } from "./constants";

function getAllHiddenMovies() {
  const allHiddenMovies = document.querySelectorAll(".moviesCard_hidden");
  return allHiddenMovies;
}

export function showHiddenMovies(windWidth) {
  const hiddenMovies = getAllHiddenMovies();
  if (hiddenMovies.length > 0) {
    if (windWidth > MEDIUM_WINDOW) {
      for (let i = 0; i < 3; i++) {
        if (hiddenMovies[i]) {
            hiddenMovies[i].classList.remove("moviesCard_hidden");
        }
      }  
    }
    if (windWidth <= MEDIUM_WINDOW || windWidth <= SMALL_WINDOW) {
      for (let i = 0; i < 2; i++) {
        if (hiddenMovies[i]) {
            hiddenMovies[i].classList.remove("moviesCard_hidden");
        } 
      }    
    }
  } 
}

export function getHiddenMoviesCount() {
  return getAllHiddenMovies().length;
}
