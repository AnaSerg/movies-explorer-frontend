import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
                <div className="footer__info-area">
                    <p className="footer__copyright">&#169; 2023</p>
                    <ul className="footer__links-list">
                        <li className="footer__list-item"><a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="https://github.com/" target="blank">Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;