import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <form class="search-bar__form" action="#" method="POST" name="search" noValidate>
                <input name="search" id="search" type="search" class="search-bar__input" placeholder="Фильм"/>
                <button class="search-bar__button" type="submit">Поиск</button>
            </form>
        </div>
    );
};

export default SearchBar;