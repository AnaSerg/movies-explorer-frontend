import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Login.css';

const Login = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Обязательное поле');
    const [passwordError, setPasswordError] = useState('Обязательное поле');
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        if(emailError || passwordError) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [emailError, passwordError]);

    const resetForm = useCallback(() => {
        setEmail('');
        setPassword('');
    }, []);

    const handleRegistration = (e) => {
        e.preventDefault();
        onLogin({password, email});
        resetForm();
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(true);
                break
            case 'password':
                setPasswordDirty(true);
                break
        }
    }

    const emailHandler = (e) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(!e.target.value) {
            setPasswordError('Обязательное поле');
        } else {
            setPasswordError('');
        }
    }

    return (
        <div className="login">
            <div className="login__container">
                <Link to="/"><img className="login__logo" alt="логотип" src={Logo}></img></Link>
                <h2 className="login__welcome">Рады видеть!</h2>
                <form onSubmit={handleRegistration} className="login__form" noValidate>
                    <label className="login__label" htmlFor="email">E-mail</label>
                    <input onBlur={(e) => blurHandler(e)} className="login__input" id="email" required name="email" type="email" value={email} onChange={e => emailHandler(e)} />
                    <div className={(emailDirty && emailError) ? "login__container-error login__container-error_active" : "login__container-error"}>{emailError}</div>
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input onBlur={(e) => blurHandler(e)} className="login__input" id="password" required name="password" type="password" value={password} onChange={e => passwordHandler(e)} />
                    <div className={(passwordDirty && passwordError) ? "register__container-error register__container-error_active" : "register__container-error"}>{passwordError}</div>
                    <span className="login__error">Что-то пошло не так...</span>
                    <button disabled={!isValid} type="submit" className={`login__button ${!isValid ? 'login__button login__button_inactive' : ""}`}>Войти</button>
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