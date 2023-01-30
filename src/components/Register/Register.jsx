import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isValid, setValid] = useState(false);

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if(error || (!name || !regex.test(String(email).toLowerCase()) || !password)) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [error]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        if(!regex.test(String(e.target.value).toLowerCase())) {
            setError(true);
        } else {
            setError(false);
        };
    }

    const nameHandler = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(!e.target.value) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const formError = () => {
        if (!name || !password || !regex.test(email.toLowerCase())) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <div className="register">
            <div className="register__container">
                <Link to="/"><img className="register__logo" alt="логотип" src={Logo}></img></Link>
                <h2 className="register__welcome">Добро пожаловать!</h2>
                <form className="register__form" noValidate>
                    <label className="register__label" htmlFor="name">Имя</label>
                    <input className="register__input" id="name" required name="name" type="text" value={name} onChange={e => nameHandler(e)} />
                    <label className="register__label" htmlFor="email">E-mail</label>
                    <input className="register__input" id="email" required name="email" type="email" value={email} onChange={e => emailHandler(e)} />
                    <label className="register__label" htmlFor="password">Пароль</label>
                    <input className="register__input" id="password" required name="password" type="password" value={password} onChange={e => passwordHandler(e)} />
                    <span className={`register__error ${error ? 'register__error_active' : ""}`}>Что-то пошло не так...</span>
                    <button onClick={formError} disabled={!isValid} type="submit" className={`register__button ${!isValid ? 'register__button_inactive' : ""}`}>Зарегистрироваться</button>
                </form>
                <div className="register__login-area">
                    <p className="register__reg-question">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__login-link">Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;