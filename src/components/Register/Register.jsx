import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <div className="register">
            <div className="register__container">
                <img className="register__logo" alt="логотип" src={Logo}></img>
                <h2 className="register__welcome">Добро пожаловать!</h2>
                <form className="register__form" noValidate>
                    <label className="register__label" for="name">Имя</label>
                    <input className="register__input" id="name" required name="name" type="text" value={name} onChange={({target}) => setName(target.value)} />
                    <label className="register__label" for="email">E-mail</label>
                    <input className="register__input" id="email" required name="email" type="email" value={email} onChange={({target}) => setEmail(target.value)} />
                    <label className="register__label" for="password">Пароль</label>
                    <input className="register__input" id="password" required name="password" type="password" value={password} onChange={({target}) => setPassword(target.value)} />
                    <span className="register__error">Что-то пошло не так...</span>
                    <button type="submit" className="register__button">Зарегистрироваться</button>
                </form>
                <div className="register__login-area">
                    <p className="register__reg-question">Уже зарегистрированы?</p>
                    <Link to="signin" className="register__login-link">Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;