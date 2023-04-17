import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://endearing-brigadeiros-de3204.netlify.app/" target="blank">
                        <h5 className="portfolio__item-title">Статичный сайт</h5>
                        <div className="portfolio__button"></div>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://anaserg.github.io/russian-travel/" target="blank">
                        <h5 className="portfolio__item-title">Адаптивный сайт</h5>
                        <div className="portfolio__button"></div>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link" href="https://creative-gumdrop-b6767e.netlify.app/" target="blank">
                        <h5 className="portfolio__item-title">Одностраничное приложение</h5>
                        <div className="portfolio__button"></div>
                    </a>
                </li>
            </ul>
        </section>
    )
};

export default Portfolio;
