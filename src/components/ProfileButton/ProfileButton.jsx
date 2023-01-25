import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from '../../images/header-profile-img.svg';
import './ProfileButton.css';

const ProfileButton = () => {
    return (
        <Link to='/profile' className="profile__button-link">
            <div className="profile-button">
                <img src={ProfileImg} alt="иконка кнопки профиля" className="profile-img" />
                <p className="profile-title">Аккаунт</p>
            </div>
        </Link>
    )
};

export default ProfileButton;