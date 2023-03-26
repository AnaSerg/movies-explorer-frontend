import React, {useContext} from 'react';
import {useLocation} from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import MoviesListButton from "../MoviesListButton/MoviesListButton";
import {CurrentUserContext} from "../../contexts/CurrentUserContest";

const MoviesCardList = ({ savedMovies, onSaveMovie, onDeleteMovie, checked, initialMovies, moviesList, handlePagination, shortMovies }) => {

    const location = useLocation();

    return (
        <>
            <ul className="movies-list">
                { location.pathname === '/movies' && moviesList.length !== 0
                    &&
                    moviesList.map((movie) => (
                        <li key={movie.id} className="movies-list__item">
                            <MoviesCard
                                title={movie.nameRU || movie.nameEN}
                                nameEN={movie.nameEN}
                                nameRU={movie.nameRU}
                                country={movie.country}
                                director={movie.director}
                                year={movie.year}
                                description={movie.description}
                                trailerLink={movie.trailerLink}
                                thumbnail={'https://api.nomoreparties.co' + movie.image.url}
                                duration={movie.duration}
                                id={movie.id}
                                image={'https://api.nomoreparties.co' + movie.image.url}
                                onSaveMovie={onSaveMovie}
                                onDeleteMovie={onDeleteMovie}
                                savedMovies={savedMovies}
                            />
                        </li>
                    ))
                }
                {location.pathname === '/saved-movies' && moviesList.length !== 0 &&
                    moviesList.map((movie) => (
                        <li key={movie.movieId} className="movies-list__item">
                            <MoviesCard
                                title={movie.nameRU || movie.nameEn}
                                duration={movie.duration}
                                image={movie.image}
                                onDeleteMovie={onDeleteMovie}
                                savedMovies={savedMovies}
                                id={movie._id}
                            />
                        </li>
                    ))
                }
            </ul>
                <MoviesListButton savedMovies={savedMovies} shortMovies={shortMovies} moviesList={moviesList} handlePagination={handlePagination} initialMovies={initialMovies} checked={checked} text="Ещё"/>

        </>
    )
};

export default MoviesCardList;