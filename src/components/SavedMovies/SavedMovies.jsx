import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
        initialSavedMovies,
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
        setFilterSaved,
      setCheckedSaved
    }) => {

    const {pathname} = useLocation();

    useEffect(() => {
      if(savedMovies && savedMovies.length === 0) {
        setError('Ничего не найдено');
      } else {
        setError('');
      }
    }, [savedMovies]);

    useEffect(() => {
      setFilterSaved('');
      setCheckedSaved(false);
      setSavedMovies(initialSavedMovies);
    }, [pathname])

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
                        checked={checkedSaved}
                        moviesList={savedMovies}
                        savedMovies={savedMovies}
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
