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
  const [initialMovies, setInitialMovies] = useState([]); // отфильтрованные фильмы
  const [searchedMovies, setSearchedMovies] = useState([]); // фильмы, которые рендеримconst [isMoviesLoading, setMoviesLoading] = useState(false);
  const [filter, setFilter] = useState({query: ''});
  const [isMoviesLoading, setMoviesLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [limit, setLimit] = useState(8);

    const movies = JSON.parse(localStorage.getItem('filteredMovies'));
    const query = localStorage.getItem('query');
    const isChecked = JSON.parse(localStorage.getItem('checkbox'));

    useEffect(() => {
        setInitialMovies(movies);
        if(query) {
            setFilter({query: query});
        }
        if(isChecked) {
            setChecked(isChecked);
        }
        if (movies && isChecked) {
            const shortMovies = movies.filter(movie => movie.duration <= 40)
            setSearchedMovies(shortMovies);
        } else if (movies){
            setSearchedMovies(movies);
        }
    }, []);

  const onFilterByCheckbox = () => {
      setChecked(!checked);
      if(checked) {
          setSearchedMovies(initialMovies);
      } else {
          const shortMovies = initialMovies.filter(movie => movie.duration <= 40)
          setSearchedMovies(shortMovies);
      }
      localStorage.setItem('checkbox', JSON.stringify(!checked));
  }

  const onPagination = () => {
      const movies = initialMovies.slice(0, limit);
      setSearchedMovies(movies);
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
              filteredMovies.length === 0 && setError('Ничего не найдено');
              localStorage.setItem('query', filter.query);
              localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
              setInitialMovies(filteredMovies);
              if(checked) {
                  setSearchedMovies(filteredMovies.filter(movie => movie.duration <= 40));
              } else {
                  setSearchedMovies(filteredMovies.slice(0, 4));
              }
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
                  limit={limit}
                  setLimit={setLimit}
                  onPagination={onPagination}
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