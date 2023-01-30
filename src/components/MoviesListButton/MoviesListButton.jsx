import React from 'react';
import './MoviesListButton.css';

const MoviesListButton = ({ text }) => {
    return (
        <button className="list-button">{text}</button>
    );
};

export default MoviesListButton;