import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import './NavigationLoggedIn.css';

const NavigationLoggedIn = () => {
    const { pathname } = useLocation();

    return (
        <nav className="header__navigation header__navigation_logged-in">
            <div className="header__navigation-menu">
                <Link to='/movies' className={pathname === '/movies' ? 'header__nav-link_active' : 'header__nav-link'}>Фильмы</Link>
                <Link to='/saved-movies' className={pathname === '/saved-movies' ? 'header__nav-link_active' : 'header__nav-link'}>Сохранённые фильмы</Link>
            </div>
            <ProfileButton />
        </nav>
    )
};

export default NavigationLoggedIn;