import React from 'react';
import './Checkbox.css';

const Checkbox = ({ text, checked, onFilterByCheckbox }) => {

    return (
            <div className="checkbox">
                <label className="checkbox__container">
                    <input onChange={onFilterByCheckbox} checked={checked} value={checked} className="checkbox__input" type="checkbox"></input>
                    <span className="checkbox__mark"></span>
                </label>
                <p className="checkbox__description">{text}</p>
            </div>
    );
};

export default Checkbox;
