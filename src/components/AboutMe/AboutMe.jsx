import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Photo from '../../images/student-photo.jpeg';
import './AboutMe.css';

const AboutMe = ({title}) => {
    return (
        <section className="about-me">
            <SectionTitle title={title} className="about-me__heading section-title"/>
            <div className="about-me__content">
                <div className="about-me__info">
                    <h3 className="about-me__title">Анастасия</h3>
                    <h4 className="about-me__subtitle">Фронтенд-разработчик, 28 лет</h4>
                    <p className="about-me__description">
                        Я родилась и выросла в небольшом городе за полярным кругом. У меня есть муж и годовалый сын.
                        В свободное время занимаюсь волейболом. В 2022 году решила сменить вид деятельности,
                        так как моя мечта - создавать удобные сервисы, которые ускоряют и автоматизируют работу людей.
                    </p>
                    <a href="https://github.com/AnaSerg" className="about-me__link" target="blank">Github</a>
                </div>
                <img src={Photo} alt="фото студента" className="about-me__photo" />
            </div>
        </section>
    )
};

export default AboutMe;