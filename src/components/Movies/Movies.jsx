import React from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { Preloader } from '../UI/preloader/Preloader';
import MoviesListButton from '../MoviesListButton/MoviesListButton';
import './Movies.css';

const Movies = ({ setNotFoundMessage, notFoundMessage, openBurgerMenu, searchedMovies, isBurgerMenuVisible, setBurgerMenuVisible, movies, isLoading, movieError, filter, setFilter, setSearchedMovies}) => {

    return (
        <div className="test">
            <Header openBurgerMenu={openBurgerMenu}/>
            <main className="main">
                <SearchForm setNotFoundMessage={setNotFoundMessage} filter={filter} setFilter={setFilter} movies={movies} setSearchedMovies={setSearchedMovies}/>
                <Checkbox text="Короткометражки" />
                { isLoading
                    ? <div className="movies-preloader"><Preloader /></div>
                    : <MoviesCardList moviesList={searchedMovies} notFoundMessage={notFoundMessage}/>
                }
                { movieError &&
                    <h2 className="movies-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
                }
                { notFoundMessage &&
                    <h2 className="movies-error">Ничего не найдено</h2>
                }
                { searchedMovies.length !== 0 &&
                    <MoviesListButton text="Ещё"/>
                }
                <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            </main>
            <Footer />
        </div>
    )
};

export default Movies;
