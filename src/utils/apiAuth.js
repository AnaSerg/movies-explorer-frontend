export const BASE_URL = 'https://api.movies-backend.nomoredomains.club';



export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password})
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                if(res.status === 409) {
                    return Promise.reject('Пользователь с таким email уже существует');
                } else {
                    return Promise.reject('При регистрации пользователя произошла ошибка.');
                }
            }
        })
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
    })
      .then((res) => {
          if (res.ok) {
              return res.json();
          } else {
              return Promise.reject('Вы ввели неправильный логин или пароль.');
          }
      })
}

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
    })
      .then((res) => {
          if (res.ok) {
              return res.json();
          } else {
              return Promise.reject('При авторизации произошла ошибка. Токен не передан или передан не в том формате');
          }
      })
}
