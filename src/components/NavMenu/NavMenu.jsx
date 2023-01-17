import React from 'react';
import Navigation from '../Navigation/Navigation';
import ProfileButton from '../ProfileButton/ProfileButton';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <div className="header__navi-menu">
           <Navigation />
            <ProfileButton />
        </div>
    )
};

export default NavMenu;