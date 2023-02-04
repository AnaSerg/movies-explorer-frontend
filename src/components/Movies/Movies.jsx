import React, {useEffect} from 'react';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchForm from '../SearchForm/SearchForm';
import Checkbox from '../Checkbox/Checkbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { Preloader } from '../UI/preloader/Preloader';
import './Movies.css';

const Movies = ({ onFilterByCheckbox, checked, error, onSearchForm, openBurgerMenu, searchedMovies, isBurgerMenuVisible, setBurgerMenuVisible, isLoading, filter, setFilter}) => {

    return (
        <div className="page__container">
            <Header openBurgerMenu={openBurgerMenu}/>
            <main className="main">
                <SearchForm onSearchForm={onSearchForm} filter={filter} setFilter={setFilter} />
                <Checkbox onFilterByCheckbox={onFilterByCheckbox} text="Короткометражки" checked={checked} searchedMovies={searchedMovies}/>
                { isLoading
                    ? <div className="movies-preloader"><Preloader /></div>
                    : <MoviesCardList moviesList={searchedMovies} />
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
