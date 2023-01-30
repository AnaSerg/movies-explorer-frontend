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
                <button onClick={closeBurgerMenu} className="burger-menu__button"></button>
                <nav className="burger-menu__navigation">
                    <ul className="burger-menu__links">
                        <li className={`burger-menu__link-item ${pathname === '/' ? 'burger-menu__link-item_active' : ""}`}>
                            <Link to='/' className="burger-menu__link">Главная</Link>
                        </li>
                        <li className={`burger-menu__link-item ${pathname === '/movies' ? 'burger-menu__link-item_active' : ""}`}>
                            <Link to='/movies' className="burger-menu__link">Фильмы</Link>
                        </li>
                        <li className={`burger-menu__link-item ${pathname === '/saved-movies' ? 'burger-menu__link-item_active' : ""}`}>
                            <Link to='/saved-movies' className="burger-menu__link">Сохранённые фильмы</Link>
                        </li>
                    </ul>
                    <ProfileButton className="burger-menu__profile-button profile-button" />
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;