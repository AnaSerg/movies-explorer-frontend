import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

const App = () => {
  return (
    <div className="page">
        <Routes>
          <Route exact path="/" element={<Main />}>
          </Route>
          <Route path="/movies" element={<Movies /> }>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

/*
<Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="movies">
            <Movies />
          </Route>
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