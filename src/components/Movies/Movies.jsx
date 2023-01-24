import React, { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchBar from '../SearchBar/SearchBar';
import Checkbox from '../Checkbox/Checkbox';
import Footer from '../Footer/Footer';
import './Movies.css';

const Movies = () => {

    const [isVisible, setVisible] = useState(false);

    const openBurgerMenu = () => {
        setVisible(true);
    }

    return (
        <main className="main">
            <div className="content-movies">
                <Header openBurgerMenu={openBurgerMenu}/>
                <SearchBar />
                <Checkbox text="Короткометражки" />
                <BurgerMenu isVisible={isVisible} setVisible={setVisible}/>
                <Footer />
            </div>
        </main>
    )
};

export default Movies;
