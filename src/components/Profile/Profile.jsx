import React, {useContext, useEffect, useState} from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { CurrentUserContext } from "../../contexts/CurrentUserContest";
import './Profile.css';

const Profile = ({ openBurgerMenu, isBurgerMenuVisible, setBurgerMenuVisible, loggedIn, onSignOut, onUpdateUser, error, success }) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        if(currentUser.email === email || currentUser.name === name || emailError || nameError) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [emailError, nameError, email, name]);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        onUpdateUser({name, email});
    }

    const emailHandler = (e) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setEmail(e.target.value);
        if(!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный e-mail');
            if(!e.target.value) {
                setEmailError('Обязательное поле');
            } else if (e.target.value === currentUser.email) {
                setEmailError('Email не должен совпадать с предыдущим');
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
        } else if (e.target.value === currentUser.name) {
                setNameError('Имя не должен совпадать с предыдущим');
        } else {
            setNameError('');
        }
    }

    return (
        <div className='profile'>
            <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn}/>
            <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            <div className="profile__content">
                <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleUpdateUser}>
                    <label className="profile__label">Имя
                        <input className="profile__input" type="text" value={name} onChange={(e) => nameHandler(e)}/>
                    </label>
                    <div className={(nameError) ? "profile__container-error profile__container-error_active" : "profile__container-error"}>
                        {nameError}
                    </div>
                    <label className="profile__label">E-mail
                        <input className="profile__input" type="email" value={email} onChange={(e) => emailHandler(e)}/>
                    </label>
                    <div className={(emailError) ? "profile__container-error profile__container-error_active" : "profile__container-error"}>
                        {emailError}
                    </div>
                    <button disabled={!isValid} type="submit" className={`profile__button ${!isValid ? 'profile__button register__button_inactive' : ""}`}>
                        Редактировать
                    </button>
                    <div className={success.length !== 0 ? "profile__container-success profile__container-success_active" : "profile__container-success"}>
                        {success}
                    </div>
                    <div className={error ? "profile__container-error profile__container-error_active" : "profile__container-error"}>
                        {error}
                    </div>
                </form>
                <button onClick={() => onSignOut()} className="profile__button-sign-out">Выйти из аккаунта</button>
            </div>
        </div>
    );
};

export default Profile;