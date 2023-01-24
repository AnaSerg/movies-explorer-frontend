import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import './BurgerMenu.css';

const BurgerMenu = ({ isVisible, setVisible }) => {
    const { pathname } = useLocation();

    const classes = ['burger-menu'];
    const contentClasses = ['burger-menu__content'];

    if (isVisible) {
        classes.push('burger-menu_active');
        contentClasses.push('burger-menu__content_active')
    }

    const closeBurgerMenu = () => {
        classes.pop();
        contentClasses.pop();
        setVisible(false);
    }

    return (
        <div className={classes.join(' ')}>
            <div className={contentClasses.join(' ')}>
                <button onClick={closeBurgerMenu} className="burger__button"></button>
                <nav className="burger-menu__navigation">
                    <Link to='/' className={pathname === '/' ? 'burger-menu__link_active' :'burger-menu__link'}>Главная</Link>
                    <Link to='/movies' className={pathname === '/movies' ? 'burger-menu__link_active' :'burger-menu__link'}>Фильмы</Link>
                    <Link to='/saved-movies' className={pathname === '/saved-movies' ? 'burger-menu__link_active' :'burger-menu__link'}>Сохранённые фильмы</Link>
                    <ProfileButton />
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;