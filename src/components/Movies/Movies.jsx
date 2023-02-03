import React, {useEffect} from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { Preloader } from '../UI/preloader/Preloader';
import MoviesListButton from '../MoviesListButton/MoviesListButton';
import './Movies.css';

const Movies = ({ error, onSearchForm, notFoundMessage, openBurgerMenu, searchedMovies, isBurgerMenuVisible, setBurgerMenuVisible, isLoading, filter, setFilter}) => {

    return (
        <div className="page__container">
            <Header openBurgerMenu={openBurgerMenu}/>
            <main className="main">
                <SearchForm onSearchForm={onSearchForm} filter={filter} setFilter={setFilter} />
                <Checkbox text="Короткометражки" />
                { isLoading
                    ? <div className="movies-preloader"><Preloader /></div>
                    : <MoviesCardList moviesList={searchedMovies} />
                }
                { error &&
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
