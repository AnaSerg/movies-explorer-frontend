import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

const AboutProject = ({title}) => {
    return (
        <section id="about-project" className="about-project">
            <SectionTitle title={title} className="about-project__title section-title"/>
            <ul className="about-project__info-list">
                <li className="about-project__info-item">
                    <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__info-subtitle">
                        Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности
                        и финальные доработки.
                    </p>
                </li>
                <li className="about-project__info-item">
                    <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__info-subtitle">
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать,
                        чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <div className="about-project__infographic">
                <p className="about-project__infographic-text about-project__backend-period">1 неделя</p>
                <p className="about-project__infographic-text about-project__frontend-period">4 недели</p>
                <p className="about-project__infographic-text about-project__caption">Back-end</p>
                <p className="about-project__infographic-text about-project__caption">Front-end</p>
            </div>
        </section>
    )
};

export default AboutProject;