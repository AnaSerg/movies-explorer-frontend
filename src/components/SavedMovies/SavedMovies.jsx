import React from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { Preloader } from '../UI/preloader/Preloader';
import './SavedMovies.css';

const SavedMovies = (
    {
        savedInitialMovies,
        setFilteredMovies,
        setSavedMovies,
        checkedSaved,
        onDeleteMovie,
        loggedIn,
        savedMovies,
        onFilterByCheckboxSaved,
        setError,
        error,
        onSearchFormSaved,
        openBurgerMenu,
        isBurgerMenuVisible,
        setBurgerMenuVisible,
        isLoading,
        filterSaved,
        setFilterSaved
    }) => {

    React.useEffect(() => {
        setSavedMovies(savedInitialMovies);
        setFilterSaved({query: ''});
        setFilteredMovies(savedInitialMovies);
        setError('');
    }, [])

    return (
        <div className="page__container">
            <Header openBurgerMenu={openBurgerMenu} loggedIn={loggedIn}/>
            <main className="main">
                <SearchForm onSearchForm={onSearchFormSaved} filter={filterSaved} setFilter={setFilterSaved} />
                <Checkbox onFilterByCheckbox={onFilterByCheckboxSaved} text="Короткометражки" checked={checkedSaved} />
                { isLoading
                    ? <div className="movies-preloader"><Preloader /></div>
                    : <MoviesCardList
                        onDeleteMovie={onDeleteMovie}
                        savedMovies={savedMovies}
                        checked={checkedSaved}
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