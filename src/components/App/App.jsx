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
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filter, setFilter] = useState({query: ''});
  const [checked, setChecked] = useState(false);

    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('filteredMovies'));
        const query = localStorage.getItem('query');
        const shortMovies = JSON.parse(localStorage.getItem('shortMovies'));
        const isChecked = JSON.parse(localStorage.getItem('checkbox'));
        setFilter({query: query});
        if (isChecked) {
            setChecked(isChecked);
            setSearchedMovies(shortMovies);
        } else if (movies) {
            setSearchedMovies(movies);
        }
    }, []);



  const onFilterByCheckbox = (movies) => {
      if(!checked) {
          setChecked(true);
          localStorage.setItem('checkbox', JSON.stringify(true));
          const shortMovies = movies.filter(movie => movie.duration <= 40);
          localStorage.setItem('shortMovies', JSON.stringify(shortMovies));
          {shortMovies ? setSearchedMovies(shortMovies) : setError('Ничего не найдено')};
      } else {
          setChecked(false);
          localStorage.setItem('checkbox', JSON.stringify(false));
          const longMovies = JSON.parse(localStorage.getItem('filteredMovies'));
          {longMovies && setSearchedMovies(longMovies)};
      }
  }

  const onSearchForm = () => {
      setMoviesLoading(true);
      MoviesApi.getInitialMovies()
          .then(movies => {
              const filteredMovies = movies.filter(
                  movie =>
                      movie.nameRU.toLowerCase().includes(filter.query.toLowerCase())
                      || movie.nameEN.toLowerCase().includes(filter.query.toLowerCase())
              );
              {
                  filteredMovies.length === 0 && setError('Ничего не найдено')
              }
              localStorage.setItem('query', filter.query);
              localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
              setSearchedMovies(filteredMovies);
          })
          .catch (e => {
              setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          })
          .finally (() => {
              setMoviesLoading(false);
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
                  onFilterByCheckbox={onFilterByCheckbox}
                  checked={checked}
                  setChecked={setChecked}
                  onSearchForm={onSearchForm}
                  error={error}
                  searchedMovies={searchedMovies}
                  setSearchedMovies={setSearchedMovies}
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