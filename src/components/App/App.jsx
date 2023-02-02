import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import MoviesApi from '../../utils/MoviesApi';
import {moviesContext} from '../../contexts/moviesContext';
import { useFetching } from '../../hooks/useFetching';

const App = () => {

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [notFoundMessage, setNotFoundMessage] = useState(false);
  const [filter, setFilter] = useState({query: ''});
  const [fetchMovies, isMoviesLoading, movieError] = useFetching( async () => {
    const response = await MoviesApi.getInitialMovies();
    setMovies(response);
  });

  useEffect(() => {
    setSearchedMovies(JSON.parse(localStorage.getItem('filteredMovies' || '[]')));
    fetchMovies();
  }, []);

    const openBurgerMenu = () => {
      setBurgerMenuVisible(true);
  }


  return (
    <div className="page">
        <Routes>
          <Route exact path="/" element={<Main openBurgerMenu={openBurgerMenu} isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />} />
          <Route path="/movies" element={<Movies notFoundMessage={notFoundMessage} setNotFoundMessage={setNotFoundMessage} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} movies={movies} movieError={movieError} isLoading={isMoviesLoading} openBurgerMenu={openBurgerMenu} isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} filter={filter} setFilter={setFilter}/> } />
          <Route path="/saved-movies" element={<SavedMovies openBurgerMenu={openBurgerMenu} isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} /> } />
          <Route path="/profile" element={<Profile openBurgerMenu={openBurgerMenu} isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} /> } />
          <Route path="signup" element={<Register />} />
          <Route path="signin" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;