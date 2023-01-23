import React, { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Footer from '../Footer/Footer';
import './Movies.css';

const Movies = () => {

    const [isVisible, setVisible] = useState(false);

    const openBurgerMenu = () => {
        setVisible(true);
    }

    return (
        <main className="main">
            <div className="content">
                <Header openBurgerMenu={openBurgerMenu}/>
                <BurgerMenu isVisible={isVisible} setVisible={setVisible}/>
                <Footer />
            </div>
        </main>
    )
};

export default Movies;
