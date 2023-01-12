import React from 'react';
import Logo from '../../images/logo.svg';
import './Header.css';
import NavTab from '../NavTab/NavTab';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <img className="header__logo" alt="логотип" src={Logo}></img>
                <NavTab />
            </div>
        </header>
    )
}

export default Header;