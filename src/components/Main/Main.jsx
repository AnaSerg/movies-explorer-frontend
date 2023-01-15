import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="content">
                <Header />
                <Promo />
                <AboutProject title='О проекте'/>
                <Techs title='Технологии'/>
                <AboutMe title='Студент' />
                <Portfolio />
                <Footer />
            </div>
        </main>
    )
};

export default Main;
