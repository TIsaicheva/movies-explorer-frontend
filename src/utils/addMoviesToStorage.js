function addMoviesToStorage(data) {
  if (!localStorage.getItem("movies")) {
    localStorage.setItem("movies", JSON.stringify(data));
  } else {
    localStorage.removeItem("movies");
    localStorage.setItem("movies", JSON.stringify(data));
  }
}

export default addMoviesToStorage;
