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
    const [isValid, setValid] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(currentUser.email === email || emailError) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [emailError, email]);

    useEffect(() => {
        if(currentUser.name === name || nameError) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [nameError, name]);

    const handleUpdateUser = () => {
        onUpdateUser({name, email});
        setDisabled(false);
        setVisible(false);
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
            if (e.target.value === currentUser.email) {
                setEmailError('Email не должен совпадать с предыдущим');
            }
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
                setNameError('Имя не должно совпадать с предыдущим');
        } else {
            setNameError('');
        }
    }

    const handleClickEditButton = () => {
        setDisabled(true);
        setVisible(true);
    }

    return (
        <div className='profile'>
            <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn}/>
            <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            <div className="profile__content">
                <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
                <form className="profile__form">
                    <label className="profile__label">Имя
                        <input disabled={!disabled} className={!disabled ? "profile__input profile__input_disabled" : "profile__input"} type="text" value={name} onChange={(e) => nameHandler(e)}/>
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
                    <div className={success.length !== 0 ? "profile__container-success profile__container-success_active" : "profile__container-success"}>
                        {success}
                    </div>
                    <div className={error ? "profile__container-error profile__container-error_active" : "profile__container-error"}>
                        {error}
                    </div>
                </form>
                <div className="profile__buttons-area">
                    {!visible
                        ?
                          <>
                              <button onClick={() => handleClickEditButton()} type="click" className="profile__button profile__button_edit">
                                  Редактировать
                              </button>
                              <button onClick={() => onSignOut()} className="profile__button-sign-out">Выйти из аккаунта</button>
                          </>
                        :
                            <button disabled={!isValid} onClick={handleUpdateUser} className={!isValid ? "profile__button profile__button_submit profile__button_submit-disabled" : "profile__button profile__button_submit"}>
                            Сохранить
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
