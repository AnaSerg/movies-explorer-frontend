export const BASE_URL = 'https://api.movies-backend.nomoredomains.club/';

const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`произошла ошибка`);
    }
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password})
    })
        .then((response) => handleResponse(response))
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    })
        .then((response) => handleResponse(response))
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    })
        .then((response) => handleResponse(response))
}