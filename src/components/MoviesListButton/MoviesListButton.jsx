import React from 'react';
import './MoviesListButton.css';

const MoviesListButton = ({ text }) => {
    return (
        <button className="movies-list__button">{text}</button>
    );
};

export default MoviesListButton;