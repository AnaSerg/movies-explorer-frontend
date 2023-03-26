import React from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { Preloader } from '../UI/preloader/Preloader';
import './SavedMovies.css';

const SavedMovies = ({ savedSearchedMovies, savedMovies, onSaveMovie,onDeleteMovie,  loggedIn, shortMovies, movies, onFilterByCheckbox, checked, error, onSearchFormSaved, openBurgerMenu, searchedMovies, isBurgerMenuVisible, setBurgerMenuVisible, isLoading, filter, setFilter}) => {

    return (
        <div className="page__container">
            <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn}/>
            <main className="main">
                <SearchForm onSearchForm={onSearchFormSaved} filter={filter} setFilter={setFilter} />
                <Checkbox onFilterByCheckbox={onFilterByCheckbox} text="Короткометражки" checked={checked} />
                { isLoading
                    ? <div className="movies-preloader"><Preloader /></div>
                    : <MoviesCardList
                        onDeleteMovie={onDeleteMovie}
                        onSaveMovie={onSaveMovie}
                        shortMovies={shortMovies}
                        checked={checked}
                        initialMovies={movies}
                        moviesList={savedMovies}
                       />
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

export default SavedMovies;