class MoviesApi {
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

    getInitialMovies() {
        return fetch(this._baseUrl, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._handleResponse);
    }
}

export default new MoviesApi ({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json'
    }
})