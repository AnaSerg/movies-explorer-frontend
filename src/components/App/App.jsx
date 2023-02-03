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

const App = () => {

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const [error, setError] = useState('');
  const [isMoviesLoading, setMoviesLoading] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filter, setFilter] = useState({query: ''});


  useEffect(() => {
      const movies = JSON.parse(localStorage.getItem('filteredMovies'));
      if(movies) {
          setSearchedMovies(movies);
      }
  }, []);

  const onSearchForm = () => {
    setMoviesLoading(true);
    MoviesApi.getInitialMovies()
        .then(movies => {
          const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(filter.query.toLowerCase()) || movie.nameEN.toLowerCase().includes(filter.query.toLowerCase()));
          console.log(filteredMovies);
          if(filteredMovies.length !== 0) {
              localStorage.setItem('query', filter.query);
              localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
              setSearchedMovies(filteredMovies);
              setNotFoundMessage(false);
          } else {
              localStorage.removeItem('filteredMovies');
              setSearchedMovies([]);
              setNotFoundMessage(true);
          }
          setMoviesLoading(false);
        })
        .catch (e => {
          setError(e.message);
        })
  }

  const openBurgerMenu = () => {
    setBurgerMenuVisible(true);
  }


  return (
    <div className="page">
        <Routes>
          <Route
              exact path="/"
              element={<Main
                  openBurgerMenu={openBurgerMenu}
                  isBurgerMenuVisible={isBurgerMenuVisible}
                  setBurgerMenuVisible={setBurgerMenuVisible}
              />}
          />
          <Route
              path="/movies"
              element={<Movies
                  onSearchForm={onSearchForm}
                  error={error}
                  notFoundMessage={notFoundMessage}
                  searchedMovies={searchedMovies}
                  isLoading={isMoviesLoading}
                  openBurgerMenu={openBurgerMenu}
                  isBurgerMenuVisible={isBurgerMenuVisible}
                  setBurgerMenuVisible={setBurgerMenuVisible}
                  filter={filter}
                  setFilter={setFilter}
              />}
          />
          <Route
              path="/saved-movies"
              element={<SavedMovies
                  openBurgerMenu={openBurgerMenu}
                  isBurgerMenuVisible={isBurgerMenuVisible}
                  setBurgerMenuVisible={setBurgerMenuVisible}
              />}
          />
          <Route
              path="/profile"
              element={<Profile
                  openBurgerMenu={openBurgerMenu}
                  isBurgerMenuVisible={isBurgerMenuVisible}
                  setBurgerMenuVisible={setBurgerMenuVisible}
              />}
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;