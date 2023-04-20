import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContest";
import './App.css';
import ProtectedRoutes from "../ProtectedRoutes";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import MoviesApi from '../../utils/MoviesApi';
import Api from '../../utils/MainApi';
import * as apiAuth from '../../utils/apiAuth';

const App = () => {

    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [initialMovies, setInitialMovies] = useState([]); // отфильтрованные фильмы
    const [searchedMovies, setSearchedMovies] = useState([]); // фильмы, которые рендерим]
    const [initialSavedMovies, setInitialSavedMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [filter, setFilter] = useState({query: ''});
    const [filterSaved, setFilterSaved] = useState({query: ''});
    const [isMoviesLoading, setMoviesLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkedSaved, setCheckedSaved] = useState(false);
    const [limit, setLimit] = useState(12);
    const [screenSize, setScreenSize] = useState(1280);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const movies = JSON.parse(localStorage.getItem('filteredMovies'));
  const moviesSaved = JSON.parse(localStorage.getItem('saved-movies'));
    const isChecked = JSON.parse(localStorage.getItem('checkbox'));

    const {pathname} = useLocation();
  const navigation = useNavigate();

    const auth = (jwt) => {
        return apiAuth.getContent(jwt)
            .then((res) => {
                if (res) {
                    setLoggedIn(true);
                      setCurrentUser(res.data);
                      ["/signin", "/signup"].includes(pathname)
                      ? navigation("/movies")
                      : navigation(pathname);
                }
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log('400 - токен не передан или передан не в том формате');
                } else if (err.status === 401) {
                    console.log('401 - переданный токен некорректен');
                }
            })
    }

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            auth(jwt);
        }
    }, [loggedIn]);

    useEffect(() => {
        if (loggedIn)  {
            setMoviesLoading(true);
            Promise.all([Api.getMovies(), Api.getUserInfo()])
                .then(([movies, user]) => {
                    setSavedMovies(movies.data.filter((movie) => movie.owner === currentUser._id));
                    setInitialSavedMovies(movies.data.filter((movie) => movie.owner === currentUser._id));
                    localStorage.setItem('saved-movies', JSON.stringify(movies.data.filter((movie) => movie.owner === currentUser._id)));
                })
                .catch((err) => console.log(err))
              .finally(() => {
                setMoviesLoading(false);
              })
        }
    }, [currentUser])

    useEffect(() => {
        onGetScreenSize();
    }, [windowWidth]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    useEffect(() => {
        if(movies) {
            if(isChecked) {
                setChecked(true);
            }
            onPaginateMovies(movies);
        }
    }, [isChecked, limit]);

    const onGetScreenSize = () => {
        if (windowWidth <= 1280 && windowWidth > 768) {
            setScreenSize(1280);
            setLimit(12);
        } else if (windowWidth <= 850 && windowWidth > 500) {
            setLimit(8);
            setScreenSize(768);
        } else if (windowWidth <= 500) {
            setScreenSize(320);
            setLimit(5);
        }
    }

  const onFilterByCheckbox = () => {
      setChecked(!checked);
      if(checked) {
          const slicedMovies = initialMovies.slice(0, limit);
          setSearchedMovies(slicedMovies);
      } else {
          const shortMovies = initialMovies.filter(movie => movie.duration <= 40);
          setSearchedMovies(shortMovies);
      }
      localStorage.setItem('checkbox', JSON.stringify(!checked));
  }

    const onFilterByCheckboxSaved = () => {
        setCheckedSaved(!checkedSaved);
        if(checkedSaved) {
            setSavedMovies((filteredMovies.length !== 0 && filteredMovies) || (moviesSaved && moviesSaved));
        } else {
            const shortMovies = ((filteredMovies.length !== 0 && filteredMovies) || (moviesSaved && moviesSaved)).filter(movie => movie.duration <= 40);
            setSavedMovies(shortMovies);
        }
    }

  const onPaginateMovies = (movies) => {
        const shortMovies = movies.filter(movie => movie.duration <= 40);
        setInitialMovies(movies);
        if(isChecked) {
            setSearchedMovies(shortMovies.slice(0, limit));
        } else {
            setSearchedMovies(movies.slice(0, limit));
        }
  }

  const onPaginateSavedMovies = (movies) => {
        const shortMovies = movies.filter(movie => movie.duration <= 40);
        if(checkedSaved) {
            setSavedMovies(shortMovies);
        } else {
            setSavedMovies(movies);
        }
    }

  const onSearchForm = () => {
      setMoviesLoading(true);
      setError('');
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
              onGetScreenSize();
              onPaginateMovies(filteredMovies);
          })
          .catch (e => {
              setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          })
          .finally (() => {
              setMoviesLoading(false);
          })
  }

    const onSearchFormSaved = () => {
        const filteredMovies = initialSavedMovies.filter(
            movie =>
                movie.nameRU.toLowerCase().includes(filterSaved.query.toLowerCase())
                || movie.nameEn.toLowerCase().includes(filterSaved.query.toLowerCase())
        );
        filteredMovies.length === 0 && setError('Ничего не найдено');
        setFilteredMovies(filteredMovies);
        onPaginateSavedMovies(filteredMovies);
    }
  const openBurgerMenu = () => {
    setBurgerMenuVisible(true);
  }

  const onRegister = ({name, email, password}) => {
      return apiAuth.register(name, email, password)
          .then((res) => {
              if (res && !res.error) {
                  navigation('/signin');
              }
          })
          .catch((err) => {
            setError(err);
          })
  }

    const onLogin = ({email, password}) => {
        return apiAuth.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    setLoggedIn(true);
                    localStorage.setItem('jwt', res.token);
                }
            })
            .catch((err) => {
              setError(err);
            })
    };

    const onUpdateUser = (data) => {
        return Api.sendUserInfo(data)
            .then((data) => {
                setCurrentUser(data.data);
                setSuccess('Данные обновлены');
                setTimeout(() => {
                    setSuccess('');
                }, 1000);
            })
            .catch((err) => {
                setError(err);
                setTimeout(() => {
                    setError('');
                }, 1000);
            })
    }

    const onSaveMovie = (data) => {
        Api.saveMovie(data)
            .then((newMovie) => {
                setInitialSavedMovies([newMovie.data, ...initialSavedMovies]);
                setSavedMovies([newMovie.data, ...savedMovies]);
                localStorage.setItem('saved-movies', JSON.stringify([newMovie.data, ...savedMovies]));
            })
            .catch((err) => [
                console.log(err)
            ])
    }

    const onDeleteMovie = (id) => {
        Api.deleteMovie(id)
            .then((delMovie) => {
                setInitialSavedMovies((state) => state.filter((c) => c._id === id ? !delMovie.data : c));
                setSavedMovies((state) => state.filter((c) => c._id === id ? !delMovie.data : c));
                setFilteredMovies((state) => state.filter((c) => c._id === id ? !delMovie.data : c));
                const test = JSON.parse(localStorage.getItem('saved-movies'));
                localStorage.setItem('saved-movies', JSON.stringify(test.filter((c) => c._id === id ? !delMovie.data : c)));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onSignOut = () => {
        setLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('query');
        localStorage.removeItem('checkbox');
        localStorage.removeItem('filteredMovies');
        localStorage.removeItem('saved-movies');
        setFilter({query: ''});
        setInitialMovies([]);
        setSearchedMovies([]);
        setInitialSavedMovies([]);
        setSavedMovies([]);
        navigation('/');
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Routes>
                <Route element={<ProtectedRoutes loggedIn={loggedIn}/>}>
                    <Route
                        path="/movies"
                        element={<Movies
                            isLoading={isMoviesLoading}
                            isBurgerMenuVisible={isBurgerMenuVisible}
                            setBurgerMenuVisible={setBurgerMenuVisible}
                            filter={filter}
                            setFilter={setFilter}
                            searchedMovies={searchedMovies}
                            openBurgerMenu={openBurgerMenu}
                            onFilterByCheckbox={onFilterByCheckbox}
                            checked={checked}
                            onSearchForm={onSearchForm}
                            error={error}
                            setError={setError}
                            limit={limit}
                            setLimit={setLimit}
                            screenSize={screenSize}
                            loggedIn={loggedIn}
                            onSaveMovie={onSaveMovie}
                            onDeleteMovie={onDeleteMovie}
                            savedMovies={savedMovies}
                        />}
                    />
                    <Route
                        path="/saved-movies"
                        element={<SavedMovies
                            isLoading={isMoviesLoading}
                            isBurgerMenuVisible={isBurgerMenuVisible}
                            setBurgerMenuVisible={setBurgerMenuVisible}
                            filterSaved={filterSaved}
                            setFilterSaved={setFilterSaved}
                            openBurgerMenu={openBurgerMenu}
                            onFilterByCheckboxSaved={onFilterByCheckboxSaved}
                            checkedSaved={checkedSaved}
                            setCheckedSaved={setCheckedSaved}
                            onSearchFormSaved={onSearchFormSaved}
                            error={error}
                            setError={setError}
                            limit={limit}
                            setLimit={setLimit}
                            loggedIn={loggedIn}
                            onDeleteMovie={onDeleteMovie}
                            savedMovies={savedMovies}
                            setSavedMovies={setSavedMovies}
                            setFilteredMovies={setFilteredMovies}
                            initialSavedMovies={initialSavedMovies}
                        />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile
                            openBurgerMenu={openBurgerMenu}
                            isBurgerMenuVisible={isBurgerMenuVisible}
                            setBurgerMenuVisible={setBurgerMenuVisible}
                            success={success}
                            onUpdateUser={onUpdateUser}
                            loggedIn={loggedIn}
                            onSignOut={onSignOut}
                        />}
                    />
                </Route>
              <Route
                  exact path="/"
                  element={<Main
                      openBurgerMenu={openBurgerMenu}
                      isBurgerMenuVisible={isBurgerMenuVisible}
                      setBurgerMenuVisible={setBurgerMenuVisible}
                      loggedIn={loggedIn}
                  />}
              />
              <Route path="/signup" element={<Register onRegister={onRegister} error={error} setError={setError}/>} />
              <Route path="/signin" element={<Login onLogin={onLogin} error={error} setError={setError}/>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
