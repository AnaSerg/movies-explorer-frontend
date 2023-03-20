class Api {
    constructor({ baseUrl, headers }, cardId) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._cardId = cardId;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
        })
            .then(this._handleResponse);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
        })
            .then(this._handleResponse);
    }

    sendUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            })
        })
            .then(this._handleResponse);
    }

    sendNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            })
        })
            .then(this._handleResponse);
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
        })
            .then(this._handleResponse);
    }

    changeLikeCardStatus(id, isLiked) {
        if(isLiked) {
            return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt')}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(this._handleResponse);
        } else {
            return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt')}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(this._handleResponse);
        }
    }

    sendAvatarInfo(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._handleResponse);
    }
}

export default new Api ({
    baseUrl: 'http://localhost:3000',
    headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
});
