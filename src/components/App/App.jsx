import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

const App = () => {

  const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const openBurgerMenu = () => {
    setBurgerMenuVisible(true);
}

  return (
    <div className="page">
        <Routes>
          <Route exact path="/" element={<Main openBurgerMenu={openBurgerMenu} />}>
          </Route>
          <Route path="/movies" element={<Movies openBurgerMenu={openBurgerMenu} isBurgerMenuVisible={isBurgerMenuVisible} setBurgerMenuVisible={setBurgerMenuVisible} /> }>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

/*
<Switch>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="signup">
            <Register />
          </Route>
        </Switch>

        */