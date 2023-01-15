import React from 'react';
import './Portfolio.css';
import Arrow from '../../images/arrow-link.svg';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <h5 className="portfolio__item-title">Статичный сайт</h5>
                    <a href="https://endearing-brigadeiros-de3204.netlify.app/" target="blank"><button className="portfolio__button"></button></a>
                </li>
                <li className="portfolio__list-item">
                    <h5 className="portfolio__item-title">Адаптивный сайт</h5>
                    <a href="https://anaserg.github.io/russian-travel/" target="blank"><button className="portfolio__button"></button></a>
                </li>
                <li className="portfolio__list-item">
                    <h5 className="portfolio__item-title">Одностраничное приложение</h5>
                    <a href="https://creative-gumdrop-b6767e.netlify.app/" target="blank"><button className="portfolio__button"></button></a>
                </li>
            </ul>
        </section>
    )
};

export default Portfolio;