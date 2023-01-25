import React, { useState } from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

const Movies = ({ openBurgerMenu, isBurgerMenuVisible, setBurgerMenuVisible }) => {

    return (
        <main className="main">
            <div className="content-movies">
                <Header openBurgerMenu={openBurgerMenu}/>
                <SearchForm />
                <Checkbox text="Короткометражки" />
                <MoviesCardList />
                <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
                <Footer />
            </div>
        </main>
    )
};

export default Movies;
