import React from 'react';
import './SearchForm.css';

const SearchBar = ({ filter, setFilter, movies, setSearchedMovies, setNotFoundMessage }) => {

    const handleSearchMovies = (e) => {
        e.preventDefault();
        localStorage.setItem('query', filter.query);
        const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(filter.query.toLowerCase()));
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        setSearchedMovies(filteredMovies);

        if (filteredMovies.length === 0) {
            setNotFoundMessage(true);
        } else {
            setNotFoundMessage(false);
        }
    }

    return (
        <div className="search-bar">
            <form className="search-bar__form" action="#" method="POST" name="search">
                <input onChange={e => setFilter({query: e.target.value})} required value={filter.query} name="search" id="search" type="search" className="search-bar__input" placeholder="Фильм"/>
                <button onClick={handleSearchMovies} className="search-bar__button" type="submit">Поиск</button>
            </form>
        </div>
    );
};

export default SearchBar;