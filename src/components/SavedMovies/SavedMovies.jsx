import React from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { Preloader } from '../UI/preloader/Preloader';
import './SavedMovies.css';

const SavedMovies = ({ savedInitialMovies, setFilteredMovies, setSavedMovies, checkedSaved, onSaveMovie,onDeleteMovie,  loggedIn, shortMovies, movies, savedMovies, onFilterByCheckboxSaved, checked, error, onSearchFormSaved, openBurgerMenu, searchedMovies, isBurgerMenuVisible, setBurgerMenuVisible, isLoading, filterSaved, setFilterSaved}) => {

    React.useEffect(() => {
        setSavedMovies(savedInitialMovies);
        setFilterSaved({query: ''});
        setFilteredMovies(savedInitialMovies);
    }, [])

    return (
        <div className="page__container">
            <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn}/>
            <main className="main">
                <SearchForm onSearchForm={onSearchFormSaved} filter={filterSaved} setFilter={setFilterSaved} />
                <Checkbox onFilterByCheckbox={onFilterByCheckboxSaved} text="Короткометражки" checked={checked} />
                { isLoading
                    ? <div className="movies-preloader"><Preloader /></div>
                    : <MoviesCardList
                        onDeleteMovie={onDeleteMovie}
                        onSaveMovie={onSaveMovie}
                        shortMovies={shortMovies}
                        savedMovies={savedMovies}
                        checked={checkedSaved}
                        initialMovies={movies}
                        moviesList={savedMovies}
                       />
                }

                <BurgerMenu isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible}/>
            </main>
            <Footer />
        </div>
    )
};

export default SavedMovies;