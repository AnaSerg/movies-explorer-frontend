import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Header.css';
import NavigationLoggedOut from '../NavigationLoggedOut/NavigationLoggedOut';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn'
import ProfileButton from '../ProfileButton/ProfileButton';


const Header = ({ openBurgerMenu }) => {
    const { pathname } = useLocation();

    const handleOpenBurgerMenu = () => {
        openBurgerMenu();
    }

    return (
        <header className="header" style={{ backgroundColor: pathname === '/' ? '#F3C1F8' : '#fff' }}>
            <div className="header__wrapper">
                <Link to="/"><img className="header__logo" alt="логотип" src={Logo}></img></Link>
                {pathname === '/' ? <NavigationLoggedOut /> : <NavigationLoggedIn /> }
                {pathname === '/' ? '' : <button onClick={handleOpenBurgerMenu} className="header__menu-button" type="button"></button>}
            </div>
        </header>
    )
}

export default Header;