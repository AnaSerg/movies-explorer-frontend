import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from '../../images/header-profile-img.svg';
import './ProfileButton.css';

const ProfileButton = ({ className }) => {
    return (
        <Link to='/profile' className={className}>
            <div className="profile-button__container">
                <img src={ProfileImg} alt="иконка кнопки профиля" className="profile-button__img" />
                <p className="profile-button__title">Аккаунт</p>
            </div>
        </Link>
    )
};

export default ProfileButton;