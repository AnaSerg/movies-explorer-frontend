import React from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { Preloader } from '../UI/preloader/Preloader';
import './Movies.css';

const Movies = ({ savedMovies, onSaveMovie,onDeleteMovie,  loggedIn, shortMovies, screenSize, movies, limit, setLimit, onFilterByCheckbox, checked, error, onSearchForm, openBurgerMenu, searchedMovies, isBurgerMenuVisible, setBurgerMenuVisible, isLoading, filter, setFilter}) => {

    const handlePagination = () => {
        if (screenSize === 1280) {
            setLimit(limit + 4);
        } else if (screenSize === 768 || (screenSize === 320)) {
            setLimit(limit + 2);
        }
    }

    return (
        <div className="page__container">
            <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn}/>
            <main className="main">
                <SearchForm onSearchForm={onSearchForm} filter={filter} setFilter={setFilter} />
                <Checkbox onFilterByCheckbox={onFilterByCheckbox} text="Короткометражки" checked={checked} />
                { isLoading
                    ? <div className="movies-preloader"><Preloader /></div>
                    : <MoviesCardList savedMovies={savedMovies} onDeleteMovie={onDeleteMovie} onSaveMovie={onSaveMovie} shortMovies={shortMovies} checked={checked} initialMovies={movies} moviesList={searchedMovies} handlePagination={handlePagination} />
                }
                { error &&
                    <h2 className="movies-error">{error}</h2>
                }

                <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            </main>
            <Footer />
        </div>
    )
};

export default Movies;
