class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            Promise.reject(`Ошибка: ${res.status}`);
        }
    }


    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._handleResponse);
    }

    sendUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
          .then((res) => {
              if (res.ok) {
                  return res.json();
              } else {
                  if(res.status === 409) {
                      return Promise.reject('Пользователь с таким email уже существует');
                  } else {
                      return Promise.reject('При обновлении данных пользователя произошла ошибка.');
                  }
              }
          })
    }

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._handleResponse);
    }

    saveMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                thumbnail: data.thumbnail,
                trailerLink: data.trailerLink,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEn: data.nameEN
            })
        })
            .then(this._handleResponse);
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._handleResponse);
    }
}

export default new Api ({
    baseUrl: 'https://api.movies-backend.nomoredomains.club',
    headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
});
