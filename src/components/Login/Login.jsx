import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <div className="login__container">
                <Link to="/"><img className="login__logo" alt="логотип" src={Logo}></img></Link>
                <h2 className="login__welcome">Рады видеть!</h2>
                <form className="login__form" noValidate>
                    <label className="login__label" for="email">E-mail</label>
                    <input className="login__input" id="email" required name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label className="login__label" for="password">Пароль</label>
                    <input className="login__input" id="password" required name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <span className="login__error">Что-то пошло не так...</span>
                    <button type="submit" className="login__button">Войти</button>
                </form>
                <div className="login__reg-area">
                    <p className="login__reg-question">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="login__reg-link">Регистрация</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;