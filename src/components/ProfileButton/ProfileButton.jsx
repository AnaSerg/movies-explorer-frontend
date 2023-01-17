import React from 'react';
import ProfileImg from '../../images/header-profile-img.svg';
import './ProfileButton.css';

const ProfileButton = () => {
    return (
        <div className="profile-button">
            <img src={ProfileImg} alt="иконка кнопки профиля" className="profile-img" />
            <p className="profile-title">Аккаунт</p>
        </div>
    )
};

export default ProfileButton;