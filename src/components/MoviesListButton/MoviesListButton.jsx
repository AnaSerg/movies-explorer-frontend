import React from 'react';
import {useLocation} from 'react-router-dom';
import './MoviesListButton.css';

const MoviesListButton = ({ handlePagination, text, moviesList, initialMovies, checked }) => {
    const location = useLocation();

    if(initialMovies && !checked && location.pathname === '/movies') {
        return (
          moviesList.length < initialMovies.length &&
          <button onClick={handlePagination} className="list-button">{text}</button>
        );
    } else if (initialMovies && checked && location.pathname === '/movies') {
        const shortMovies = (location.pathname === '/movies' && initialMovies) && initialMovies.filter(movie => movie.duration <= 40);
        return (
          moviesList.length < shortMovies.length &&
          <button onClick={handlePagination} className="list-button">{text}</button>
        );
    }
};

export default MoviesListButton;
