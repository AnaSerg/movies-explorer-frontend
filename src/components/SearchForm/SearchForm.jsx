import React, {useEffect} from 'react';
import './SearchForm.css';

const SearchBar = ({ onSearchForm, filter, setFilter }) => {

    const handleSearchMovies = (e) => {
        e.preventDefault();
        onSearchForm();
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