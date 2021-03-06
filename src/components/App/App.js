import React from "react";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Route, Switch } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";
import "./App.css";

function App() {
  const [movies, setMovies] = React.useState([]);

  // получение фильмов по ключеврму слову
  function getMovies() {
    moviesApi.movies()
      .then((data) => {
        console.log(data);
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMovies();

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movies">
          <Movies movies={movies} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
