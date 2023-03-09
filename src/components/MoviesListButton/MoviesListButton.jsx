import React from 'react';
import './MoviesListButton.css';

const MoviesListButton = ({ text, onPagination, moviesList, initialMovies, limit, setLimit }) => {

    const handlePagination = () => {
        setLimit(limit + 4);
        onPagination();
    }
    return (
        moviesList.length !== 0 && <button onClick={() => handlePagination()} className="list-button">{text}</button>
    );
};

export default MoviesListButton;