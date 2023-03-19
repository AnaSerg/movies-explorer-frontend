import React from 'react';
import './MoviesListButton.css';

const MoviesListButton = ({ handlePagination, text, moviesList, initialMovies, shortMovies, checked }) => {

    return (
        moviesList.length !== 0 &&
        (checked ? moviesList.length !== shortMovies.length
        : moviesList.length !== initialMovies.length) &&
        <button onClick={handlePagination} className="list-button">{text}</button>
    );
};

export default MoviesListButton;