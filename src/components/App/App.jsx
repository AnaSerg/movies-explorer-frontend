import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';
import Register from '../Register/Register';
import Login from '../Login/Login';

const App = () => {

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const openBurgerMenu = () => {
    setBurgerMenuVisible(true);
}

  return (
    <div className="page">
        <Routes>
          <Route exact path="/" element={<Main openBurgerMenu={openBurgerMenu} isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} />} />
          <Route path="/movies" element={<Movies openBurgerMenu={openBurgerMenu} isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} /> } />
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