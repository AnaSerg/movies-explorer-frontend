import React, {useEffect, useState} from 'react';
import './Checkbox.css';

const Checkbox = ({ text, checked, onFilterByCheckbox, searchedMovies }) => {

    return (
            <div className="checkbox">
                <label className="checkbox__container">
                    <input onChange={() => onFilterByCheckbox(searchedMovies)} checked={checked} className="checkbox__input" type="checkbox"></input>
                    <span className="checkbox__mark"></span>
                </label>
                <p className="checkbox__description">{text}</p>
            </div>
    );
};

export default Checkbox;