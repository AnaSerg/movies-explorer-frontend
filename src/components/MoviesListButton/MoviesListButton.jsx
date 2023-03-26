import React from 'react';
import {useLocation} from 'react-router-dom';
import './MoviesListButton.css';

const MoviesListButton = ({ handlePagination, text, moviesList, initialMovies, shortMovies, checked }) => {
    const location = useLocation();

    return (
        location.pathname === '/movies' && moviesList.length !== 0 &&
        (checked ? moviesList.length !== shortMovies.length
        : moviesList.length !== initialMovies.length) &&
        <button onClick={handlePagination} className="list-button">{text}</button>
    );
};

export default MoviesListButton;