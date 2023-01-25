import React from 'react';
import './SearchForm.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <form className="search-bar__form" action="#" method="POST" name="search" noValidate>
                <input name="search" id="search" type="search" className="search-bar__input" placeholder="Фильм"/>
                <button className="search-bar__button" type="submit">Поиск</button>
            </form>
        </div>
    );
};

export default SearchBar;