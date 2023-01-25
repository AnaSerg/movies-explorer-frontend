import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesListButton from '../MoviesListButton/MoviesListButton';
import { movies } from '../../utils/constants';
import './MoviesCardList.css';

const MoviesCardList = () => {

    return (
        <>
            <div className="movies__card-list">
                {
                    movies.map((movie) => (
                        <MoviesCard key={movie.id} title={movie.title} duration={movie.duration} image={movie.image} />
                    ))
                }
            </div>
            <MoviesListButton text="Ещё"/>
        </>
    )
};

export default MoviesCardList;