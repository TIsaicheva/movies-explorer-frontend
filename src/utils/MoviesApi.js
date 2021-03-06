class MoviesApi {
  constructor(config) {
    this._url = config.url;
  }

  movies() {
    return fetch(this._url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}

const moviesApi = new MoviesApi({ url: 'https://api.nomoreparties.co/beatfilm-movies' });

export default moviesApi;
