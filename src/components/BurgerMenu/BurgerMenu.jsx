import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import './BurgerMenu.css';

const BurgerMenu = ({ isBurgerMenuVisible, setBurgerMenuVisible }) => {
    const { pathname } = useLocation();

    const closeBurgerMenu = () => {
        setBurgerMenuVisible(false);
    }

    return (
        <div className={`burger-menu ${isBurgerMenuVisible ? 'burger-menu_active' : ""}`}>
            <div className={`burger-menu__content ${isBurgerMenuVisible ? 'burger-menu__content_active' : ""}`}>
                <button onClick={closeBurgerMenu} className="burger__button"></button>
                <nav className="burger-menu__navigation">
                    <Link to='/' className={`burger-menu__link ${pathname === '/' ? 'burger-menu__link_active' : ""}`}>Главная</Link>
                    <Link to='/movies' className={`burger-menu__link ${pathname === '/movies' ? 'burger-menu__link_active' : ""}`}>Фильмы</Link>
                    <Link to='/saved-movies' className={`burger-menu__link ${pathname === '/saved-movies' ? 'burger-menu__link_active' : ""}`}>Сохранённые фильмы</Link>
                    <ProfileButton />
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;