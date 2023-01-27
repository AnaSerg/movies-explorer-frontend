import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__info-area">
                <p className="footer__copyright">&#169; 2023</p>
                <ul className="footer__links-list">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="blank"><li className="footer__list-item">Яндекс.Практикум</li></a>
                    <a className="footer__link" href="https://github.com/" target="blank"><li className="footer__list-item">Github</li></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;