import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Header.css';
import NavigationLoggedOut from '../NavigationLoggedOut/NavigationLoggedOut';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn'
import ProfileButton from '../ProfileButton/ProfileButton';


const Header = ({ openBurgerMenu }) => {
    const { pathname } = useLocation();

    return (
        <header className="header" style={{ backgroundColor: pathname === '/' ? '#F3C1F8' : '#fff' }}>
            <div className="header__wrapper">
                <img className="header__logo" alt="логотип" src={Logo}></img>
                {pathname === '/' ? <NavigationLoggedOut /> : <NavigationLoggedIn /> }
                {pathname === '/' ? '' : <button onClick={openBurgerMenu} className="header__menu-button" type="button"></button>}
            </div>
        </header>
    )
}

export default Header;