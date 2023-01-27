import React from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { movies } from '../../utils/constants';
import './Movies.css';

const Movies = ({ openBurgerMenu, isBurgerMenuVisible, setBurgerMenuVisible }) => {

    return (
        <div>
            <Header openBurgerMenu={openBurgerMenu}/>
            <main className="main">
                <SearchForm />
                <Checkbox text="Короткометражки" />
                <MoviesCardList moviesList={movies}/>
                <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            </main>
            <Footer />
        </div>
    )
};

export default Movies;
