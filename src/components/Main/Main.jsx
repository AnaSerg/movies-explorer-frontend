import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Main.css';

const Main = ({ openBurgerMenu, isBurgerMenuVisible, setBurgerMenuVisible }) => {

    return (
        <div>
            <Header openBurgerMenu={openBurgerMenu}/>
            <main className="main">
                <Promo />
                <AboutProject title='О проекте'/>
                <Techs title='Технологии'/>
                <AboutMe title='Студент' />
                <Portfolio />
                <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            </main>
            <Footer />
        </div>
    )
};

export default Main;