import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="content">
                <Header />
                <Promo />
                <AboutProject />
            </div>
        </main>
    )
};

export default Main;
