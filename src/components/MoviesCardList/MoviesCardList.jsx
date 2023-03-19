import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import MoviesListButton from "../MoviesListButton/MoviesListButton";

const MoviesCardList = ({ checked, initialMovies, moviesList, handlePagination, shortMovies }) => {

    return (
        <>
            <ul className="movies-list">
                { moviesList.length !== 0
                    &&
                    moviesList.map((movie) => (
                        <li key={movie.id} className="movies-list__item"><MoviesCard title={movie.nameRU || movie.nameEN} duration={movie.duration} image={'https://api.nomoreparties.co' + movie.image.url} /></li>
                    ))
                }
            </ul>
                <MoviesListButton shortMovies={shortMovies} moviesList={moviesList} handlePagination={handlePagination} initialMovies={initialMovies} checked={checked} text="Ещё"/>

        </>
    )
};

export default MoviesCardList;