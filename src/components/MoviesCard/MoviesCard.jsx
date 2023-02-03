import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ image, title, duration }) => {
    const { pathname } = useLocation();
    const [isLiked, setLike] = useState(false);

    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;

    function handleLikeClick() {
        if(!isLiked) {
            setLike(true);
        } else {
            setLike(false);
        }
    }

    return (
        <div className="movies-card">
            <img className="movies-card__image" src={image} alt="обложка фильма"></img>
            <div className="movies-card__description">
                <h3 className="movies-card__title">{title}</h3>
                {
                    pathname === '/saved-movies' ?
                    <button className='movies-card__dislike' onClick={handleLikeClick}></button> :
                    <button className={`movies-card__like ${isLiked ? 'movies-card__like_active' : ""}`} onClick={handleLikeClick}></button>
                }
            </div>
            <p className="movies-card__duration">{ duration > 60 ? `${hours}ч ${minutes}м` : `${minutes}м`}</p>
        </div>
    );
};

export default MoviesCard;