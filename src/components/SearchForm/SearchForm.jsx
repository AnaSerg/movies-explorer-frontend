import React, {useState} from 'react';
import './SearchForm.css';

const SearchBar = ({ onSearchForm, filter, setFilter }) => {
    const [searchError, setSearchError] = useState(false);

    const handleSearchMovies = (e) => {
        e.preventDefault();
        validateForm();
    }

    const validateForm = (e) => {
        if(!filter.query) {
            setSearchError(true);
        } else {
            onSearchForm();
            setSearchError(false);
        }
    }

    return (
        <div className="search-bar">
            <form className="search-bar__form" action="#" method="POST" name="search" noValidate>
                <input onChange={e => setFilter({query: e.target.value})} required value={filter.query || ''} name="search" id="search" type="search" className="search-bar__input" placeholder="Фильм"/>
                <button onClick={handleSearchMovies} className="search-bar__button" type="submit">Поиск</button>
            </form>
            <span className={`search__error ${searchError ? 'search__error_active' : ""}`}>Нужно ввести ключевое слово</span>
        </div>
    );
};


export default SearchBar;