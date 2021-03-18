export function updateMovies(movies, cardMovie, val) {
  const newMovies = movies.map((m) => {
    if (m.id === cardMovie.movieId) {
      m.isSaved = val;
      return m;
    }
    return m;
  });
  return newMovies;
}

export function setMoviesLikes(movies, savedMovies, id) {
  return movies.map((movie) => { 
    if (savedMovies.some((savedMovie) => (savedMovie.movieId === movie.id && savedMovie.owner === id))) {  
      movie.isSaved = true;
      return movie;
    }
    return movie;
  });
}