import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesListButton from '../MoviesListButton/MoviesListButton';
import './MoviesCardList.css';

const MoviesCardList = ({ moviesList }) => {

    return (
        <>
            <ul className="movies-list">
                {
                    moviesList.map((movie) => (
                        <li className="movies-list__item"><MoviesCard key={movie.id} title={movie.title} duration={movie.duration} image={movie.image} /></li>
                    ))
                }
            </ul>
            <MoviesListButton text="Ещё"/>
        </>
    )
};

export default MoviesCardList;