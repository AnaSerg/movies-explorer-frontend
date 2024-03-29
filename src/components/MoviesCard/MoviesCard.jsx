import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ savedMovies, onSaveMovie, onDeleteMovie, image, title, duration, nameEN, nameRU, country, director, year, description, trailerLink, thumbnail, ownerId, id }) => {
    const [isLiked, setLike] = useState(false);
    const savedMov = localStorage.getItem('saved-movies') && JSON.parse(localStorage.getItem('saved-movies'));
    const jwt = localStorage.getItem('jwt');

    const location = useLocation();

    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;

    React.useEffect(() => {
        if(savedMov) {
            savedMov.forEach((movie) => {
                if(movie.movieId === id) {
                    setLike(true);
                }
            })
        }
    }, [location.pathname]);

    function handleLikeClick() {
        if(!isLiked) {
            setLike(true);
            onSaveMovie({ownerId, country, director, nameRU, nameEN, year, description, trailerLink, thumbnail, duration, id, image }, jwt)
        } else {
            setLike(false);
            if(savedMov.length !== 0) {
                savedMov.forEach((movie) => {
                    if (movie.movieId === id) {
                        onDeleteMovie(movie._id);
                    }
                })
            }
        }
    }

    function handleDeleteLike() {
        setLike(false);
        onDeleteMovie(id);
    }

    return (
        <div className="movies-card">
            <a className="movies-card__link" href={trailerLink} rel="noreferrer" target="_blank">
                <img className="movies-card__image" src={image} alt="обложка фильма"></img>
            </a>
            <div className="movies-card__description">
                <h3 className="movies-card__title">{title}</h3>
                { location.pathname === '/movies'
                    ?
                        <button onClick={() => handleLikeClick()} className={`movies-card__like ${isLiked ? 'movies-card__like_active' : ""}`} ></button>
                    :
                        <button onClick={() => handleDeleteLike()} className="movies-card__delete"></button>
                }
            </div>
            <p className="movies-card__duration">{ duration > 60 ? `${hours}ч ${minutes}м` : `${minutes}м`}</p>
        </div>
    );
};

export default MoviesCard;
