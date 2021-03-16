class MainApi {
  constructor(config) {
    this._url = config.baseUrl;
  }

  _setHeaders() {
    return {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`Ошибка: ${res.status}`);
  }

  // метод получает все фильм, отмеченный лайком, из БД
  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._setHeaders(),
    }).then(this._handleResponse);
  }

  // метод добавляет фильм, отмеченный лайком, в БД
  likeMovie(cardMovie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._setHeaders(),
      body: JSON.stringify(cardMovie),
    }).then(this._handleResponse);
  }

  // метод удаляет фильм, отмеченный дизлайком, из БД
  dislikeMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._setHeaders(),
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._setHeaders(),
    }).then(this._handleResponse);
  }

  updateUserInfo(email, name) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._setHeaders(),
      body: JSON.stringify({ email, name }),
    }).then(this._handleResponse);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  register(email, password, name) {
    return fetch(`${this._url}/signup`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
<<<<<<< HEAD
=======
      credentials: "include",
>>>>>>> 97c61509cc7ca0814d302447727928d9803ab792
      body: JSON.stringify({ email, password, name }),
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.tisaichdiplom.students.nomoredomains.icu",
});

export default mainApi;
