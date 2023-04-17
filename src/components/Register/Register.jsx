import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Register.css';

const Register = ({onRegister, error}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Обязательное поле');
    const [nameError, setNameError] = useState('Обязательное поле');
    const [passwordError, setPasswordError] = useState('Обязательное поле');
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        if(emailError || nameError || passwordError) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [emailError, nameError, passwordError]);

    const handleRegistration = (e) => {
        e.preventDefault();
        onRegister({name, password, email});
        //resetForm();
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'name':
                setNameDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                console.log('eslint told me to add default case');
        }
    }

    const emailHandler = (e) => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        setEmail(e.target.value);
        if(!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный e-mail');
            if(!e.target.value) {
                setEmailError('Обязательное поле');
            }
        } else {
            setEmailError('');
        };
    }


    const nameHandler = (e) => {
        const regex = /^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]*$/;
        setName(e.target.value);
        if(!regex.test(String(e.target.value).toLowerCase())) {
            setNameError('Некорректный формат имени');
        } else if (!e.target.value) {
            setNameError('Обязательное поле');
        } else {
            setNameError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(!e.target.value) {
            setPasswordError('Обязательное поле');
        } else {
            setPasswordError('');
        }
    }

    return (
        <div className="register">
            <div className="register__container">
                <Link to="/"><img className="register__logo" alt="логотип" src={Logo}></img></Link>
                <h2 className="register__welcome">Добро пожаловать!</h2>
                <form className="register__form" onSubmit={handleRegistration} noValidate>
                    <label className="register__label" htmlFor="name">Имя</label>
                    <input onBlur={(e) => blurHandler(e)} className="register__input" id="name" required name="name" type="text" value={name} onChange={e => nameHandler(e)} />
                    <div className={(nameDirty && nameError) ? "register__container-error register__container-error_active" : "register__container-error"}>{nameError}</div>
                    <label className="register__label" htmlFor="email">E-mail</label>
                    <input onBlur={(e) => blurHandler(e)} className="register__input" id="email" required name="email" type="email" value={email} onChange={e => emailHandler(e)} />
                    <div className={(emailDirty && emailError) ? "register__container-error register__container-error_active" : "register__container-error"}>{emailError}</div>
                    <label className="register__label" htmlFor="password">Пароль</label>
                    <input onBlur={(e) => blurHandler(e)} className="register__input" id="password" required name="password" type="password" value={password} onChange={e => passwordHandler(e)} />
                    <div className={(passwordDirty && passwordError) ? "register__container-error register__container-error_active" : "register__container-error"}>{passwordError}</div>
                    <span className={ error ? "register__container-error register__container-error_active" : "register__container-error"}>{error}</span>
                    <button disabled={!isValid} type="submit" className={`register__button ${!isValid ? 'register__button register__button_inactive' : ""}`}>Зарегистрироваться</button>
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
