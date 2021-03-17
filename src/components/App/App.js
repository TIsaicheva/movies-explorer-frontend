import React from "react";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Route, Switch, useHistory } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { filterBySearchStr, filterByDuration } from "../../utils/filterMovies";
import addMoviesToStorage from "../../utils/addMoviesToStorage";
import {
  showHiddenMovies,
  getHiddenMoviesCount,
} from "../../utils/hiddenMovies";
import { updateMovies, setMoviesLikes } from "../../utils/updateMovies";
import { useWindowSize } from "../../hooks/useWindowSize";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [showMovies, setShowMovies] = React.useState(false);
  const [moviesNotFound, setMoviesNotFound] = React.useState(false);
  const [savedMoviesNotFound, setSavedMoviesNotFound] = React.useState(false);
  const [shortMovies, setShortMovies] = React.useState([]);
  const [savedShortMovies, setSavedShortMovies] = React.useState([]);
  const [toggleMovies, setToggleMovies] = React.useState(false);
  const [toggleSavedMovies, setToggleSavedMovies] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMoreBtnDisabled, setIsMoreBtnDisabled] = React.useState(true); 
  const [countSavedMovies, setCountSavedMovies] = React.useState(1);
  const [isLiked, setIsLiked] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [error, setError] = React.useState({
    failedStatus: false,
    message: "",
  });
  const { width } = useWindowSize();
  const history = useHistory();
  const initialMovies = JSON.parse(localStorage.getItem("movies"));

  // получение всех фильмов
  React.useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        addMoviesToStorage(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // получение сохранённых фильмов
  function getSavedMovies() {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    if ((loggedIn && isLiked) || (loggedIn && !isLiked)) {
      getSavedMovies();
    }
  }, [loggedIn, isLiked]);

  function filterByToggle(checked, isSaved, films) {
    if (checked) {
      isSaved ? setToggleSavedMovies(true) : setToggleMovies(true);
      const shortFilms = filterByDuration(films);
      if (shortFilms.length > 0) {
        isSaved ? setSavedShortMovies(shortFilms) : setShortMovies(shortFilms);  
      } else {
        isSaved ? setSavedMoviesNotFound(true) : setMoviesNotFound(true);
        setIsMoreBtnDisabled(true);
      }
    } else {
      isSaved ? setSavedShortMovies([]) : setShortMovies([]);
      isSaved ? setSavedMoviesNotFound(false) : setMoviesNotFound(false);
      isSaved ? setToggleSavedMovies(false) : setToggleMovies(false);
      setIsMoreBtnDisabled(true);
    }
  }

  function filterMovies(films, searchString, isSaved) {
    const filteredMovies = filterBySearchStr(films, searchString);
    if (
      (filteredMovies.length > 0 && !toggleMovies) ||
      (filteredMovies.length > 0 && !toggleSavedMovies)
    ) {
      isSaved
        ? setSavedMovies(filteredMovies)
        : setMovies(
            setMoviesLikes(filteredMovies, savedMovies, currentUser.id)
          );
      isSaved ? setSavedMoviesNotFound(false) : setMoviesNotFound(false);
      isSaved && setCountSavedMovies(filteredMovies.length + 1);

      setIsMoreBtnDisabled(false);
      
    } else if (
      (filteredMovies.length > 0 && toggleMovies) ||
      (filteredMovies.length > 0 && toggleSavedMovies)
    ) {
      filterByToggle(true, isSaved, isSaved ? savedMovies : movies);  
    } else {
      isSaved ? setSavedMovies([]) : setMovies([]);

      isSaved ? setSavedMoviesNotFound(true) : setMoviesNotFound(true);
      setIsMoreBtnDisabled(true);
    }
  }

  function handleSearchMovies(searchString) {
    filterMovies(initialMovies, searchString, false);
  }

  // отрисовка блока с карточками фильмов после фильтрации
  React.useEffect(() => {
    if (movies.length > 0 || shortMovies.length > 0) {
      setShowMovies(true);
    } else {
      setShowMovies(false);
    }
  }, [movies, shortMovies]);

  function handleButtonClick() {  
    showHiddenMovies(width);
    if (getHiddenMoviesCount() <= 0) {
      setIsMoreBtnDisabled(true);
    }   
  }

  function handleSearchSavedMovies(searchString) {
    filterMovies(savedMovies, searchString, true);
  }

  function hanadleToggleChange(checked, isSaved) {
    filterByToggle(checked, isSaved, isSaved ? savedMovies : movies);
  }

  function onShowAllSavedMovies() {
    getSavedMovies();
    setCountSavedMovies(1);  
  }

  function handleMovieLike(cardMovie) {
    const liked = savedMovies.some((film) => {
      return film.movieId === cardMovie.movieId;
    });
    if (!liked) {
      mainApi
        .likeMovie(cardMovie)
        .then((newMovie) => {
          setMovies(updateMovies(movies, cardMovie, true));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const film = savedMovies.find(
        (film) => film.movieId === cardMovie.movieId
      );
      console.log(film);
      mainApi
        .dislikeMovie(film._id)
        .then((deletedMovie) => {
          setMovies(updateMovies(movies, cardMovie, false));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setIsLiked(!isLiked);
  }

  function handleDeleteSavedMovie(card) {
    mainApi
      .dislikeMovie(card._id)
      .then((deletedMovie) => {
        setSavedMovies(savedMovies.filter((s) => s._id !== card._id));
        setMovies(updateMovies(movies, card, false));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleClose() {
    setIsInfoTooltipOpen(false);
  }

  function onEdit(email, name) {
    setIsLoading(true);
    mainApi
      .updateUserInfo(email, name)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        setError({
          failedStatus: false,
          message: "",
        });
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        setError({
          failedStatus: true,
          message: "Неправильно заполнены поля.",
        });
      }).finally(() => {  
        setIsLoading(false);
      });
  }

  function onRegister(email, password, name) {
    setIsLoading(true);
    mainApi
      .register(email, password, name)
      .then((user) => {
        setError({
          failedStatus: false,
          message: "",
        });
        history.push("/signin");
      })
      .catch((err) => {
        setError({
          failedStatus: true,
          message: "Что-то пошло не так! Попробуйте ещё раз.",
        });
      }).finally(() => {
        setIsLoading(false);
      });
  }

  function onLogin(email, password) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          setError({
            failedStatus: false,
            message: "",
          });
          history.push("/movies");
        }
      })
      .catch((err) => {
        setError({
          failedStatus: true,
          message: "Неправильные почта или пароль.",
        });
      }).finally(() => {
        setIsLoading(false);
      });
  }

  function onSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  }

  function checkToken() {
    if (localStorage.getItem("token")) {
      mainApi
        .getUserInfo()
        .then((data) => {
          if (data) {
            setCurrentUser(data);
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log);
    }
  }  

  React.useEffect(() => {
    const path = document.location.pathname;
    checkToken();
    if (loggedIn) {
      history.push(path); 
    }
  }, [loggedIn, history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          movies={toggleMovies ? shortMovies : movies}
          onSearchMovies={handleSearchMovies}
          onToggleChange={hanadleToggleChange}
          showMovies={showMovies}
          moviesNotFound={moviesNotFound}
          onButtonClick={handleButtonClick}
          showMoreBtn={isMoreBtnDisabled}        
          onMovieLike={handleMovieLike}
          onLoad={isLoading}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          savedMovies={toggleSavedMovies ? savedShortMovies : savedMovies}
          moviesNotFound={savedMoviesNotFound}
          onSearchMovies={handleSearchSavedMovies}
          onToggleChange={hanadleToggleChange}
          onDeleteClick={handleDeleteSavedMovie}
          onButtonClick={onShowAllSavedMovies}
          count={countSavedMovies}        
          onLoad={isLoading}
        />
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onEdit={onEdit}
          onClick={onSignOut}
          error={error}
          onLoad={isLoading}
        />
        <Route path="/signin">
          <Login onLogin={onLogin} error={error} onLoad={isLoading} />
        </Route>
        <Route path="/signup">
          <Register onRegister={onRegister} error={error} onLoad={isLoading} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={handleClose} title="Профиль успешно сохранен!" />
    </CurrentUserContext.Provider>
  );
}

export default App;
