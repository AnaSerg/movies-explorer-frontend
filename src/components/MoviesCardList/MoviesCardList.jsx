import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ moviesList }) => {

    return (
        <>
            <ul className="movies-list">
                { moviesList &&
                    moviesList.map((movie) => (
                        <li key={movie.id} className="movies-list__item"><MoviesCard title={movie.nameRU || movie.nameEN} duration={movie.duration} image={'https://api.nomoreparties.co' + movie.image.url} /></li>
                    ))
                }
            </ul>
        </>
    )
};

export default MoviesCardList;