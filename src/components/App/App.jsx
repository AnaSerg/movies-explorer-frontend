import React from 'react';
//import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';

const App = () => {
  return (
    <div className="page">
        <Main />
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