import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Profile.css';

const Profile = ({ openBurgerMenu, isBurgerMenuVisible, setBurgerMenuVisible }) => {

    return (
        <div className='profile'>
            <Header openBurgerMenu={openBurgerMenu}/>
            <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            <div className="profile__content">
                <h2 className="profile__greeting">Привет, Виталий!</h2>
                <ul className="profile__info-area">
                    <li className="profile__info">
                        <p className="profile__label">Имя</p>
                        <p className="profile__label">Виталий</p>
                    </li>
                    <li className="profile__info">
                        <p className="profile__label">E-mail</p>
                        <p className="profile__label">pochta@yandex.ru</p>
                    </li>
                </ul>
                <ul className="profile__buttons">
                    <li className="profile__button-item">
                        <button className="profile__button">Редактировать</button>
                    </li>
                    <li className="profile__button-item">
                        <Link to="/"><button className="profile__button profile__button_type_sign-out">Выйти из аккаунта</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;