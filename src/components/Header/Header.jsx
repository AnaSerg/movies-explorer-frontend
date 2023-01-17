import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Header.css';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import ProfileButton from '../ProfileButton/ProfileButton';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
    const { pathname } = useLocation();

    /*
    const handleClickMenuBtn = () => {

    }
    */
    return (
        <header className="header" style={{ backgroundColor: pathname === '/' ? '#F3C1F8' : '#fff' }}>
            <div className="header__wrapper">
                <img className="header__logo" alt="логотип" src={Logo}></img>
                {pathname === '/' ? '' : <Navigation className="header_nana"/> }
                {pathname === '/' ? <NavTab /> : <ProfileButton />}
                <button className="header__menu-button" type="button"></button>
            </div>
        </header>
    )
}

export default Header;