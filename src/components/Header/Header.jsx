import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Header.css';
import NavigationLoggedOut from '../NavigationLoggedOut/NavigationLoggedOut';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn'


const Header = ({ openBurgerMenu, loggedIn }) => {
    const location = useLocation();

    const handleOpenBurgerMenu = () => {
        openBurgerMenu();
    }

    return (
        <header className="header" style={{ backgroundColor: location.pathname === '/' ? '#F3C1F8' : '#fff' }}>
            <div className="header__wrapper">
                <Link to="/"><img className="header__logo" alt="логотип" src={Logo}></img></Link>
                {loggedIn ? <NavigationLoggedIn /> : <NavigationLoggedOut /> }
                {loggedIn ? <button onClick={handleOpenBurgerMenu} className={location.pathname === '/' ? "header__menu-button header__menu-button_main" : "header__menu-button"} type="button"></button> : ''}
            </div>
        </header>
    )
}

export default Header;