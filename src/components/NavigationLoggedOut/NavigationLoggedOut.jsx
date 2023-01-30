import React from 'react';
import { Link } from "react-router-dom";
import './NavigationLoggedOut.css';

const NavigationLoggedOut = () => {
    return (
        <nav className="header__navigation header__navigation_logged-out">
            <Link to="/signup" className="header__button header__button_type_register">
                Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button_type_login">
                Войти
            </Link>
        </nav>
    )
}

export default NavigationLoggedOut;