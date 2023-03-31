import React from 'react';
import { Link } from "react-router-dom";
import AboutProject from '../AboutProject/AboutProject';
import './Promo.css';
import PromoImg from '../../images/landing-image.png';

const Promo = ({handleClickScroll}) => {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <img src={PromoImg} alt="Картинка" className="promo__image" />
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">
                    Листайте ниже, чтобы узнать больше
                    про этот проект и его создателя.
                </p>
                <button onClick={() => handleClickScroll()} className="promo__button">
                        Узнать больше
                </button>
            </div>
        </section>
    )
}

export default Promo;