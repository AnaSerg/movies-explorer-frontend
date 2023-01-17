import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    const { pathname } = useLocation();

    return (
        <nav className="navigation">
            <ul className="header__nav-list">
                <li className="header__nav-item">
                    <Link to="/movies" className="header__nav-link" style={{ fontWeight: pathname === '/movies' ? '500' : '400' }}>
                        Фильмы
                    </Link>
                </li>
                <li className="header__navigation-item">
                    <Link to="/saved-movies" className="header__nav-link">
                        Сохраненные фильмы
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;