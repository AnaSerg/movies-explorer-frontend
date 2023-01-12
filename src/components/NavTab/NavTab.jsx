import React from 'react';
import { Link } from "react-router-dom";
import './NavTab.css';

const NavTab = () => {
    return (
        <nav className="navigation">
            <ul className="header__navigation-list">
                <li className="header__navigation-item">
                    <Link to="/signup" className="header__button header__button_type_register">
                        Регистрация
                    </Link>
                </li>
                <li className="header__navigation-item">
                    <Link to="/signin" className="header__button header__button_type_login">
                        Войти
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavTab;