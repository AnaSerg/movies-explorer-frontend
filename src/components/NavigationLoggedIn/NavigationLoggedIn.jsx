import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import './NavigationLoggedIn.css';

const NavigationLoggedIn = () => {
    const { pathname } = useLocation();

    return (
        <nav className="header-navigation header-navigation_logged-in">
            <div className="header-navigation__menu">
                <Link to='/movies' className={`header-navigation__link ${pathname === '/movies' ? 'header-navigation__link_active' : ""}`}>Фильмы</Link>
                <Link to='/saved-movies' className={`header-navigation__link ${pathname === '/saved-movies' ? 'header-navigation__link_active' : ""}`}>Сохранённые фильмы</Link>
            </div>
            <ProfileButton className="header-navigation__button profile-button"/>
        </nav>
    )
};

export default NavigationLoggedIn;