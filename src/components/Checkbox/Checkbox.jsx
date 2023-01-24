import React from 'react';
import './Checkbox.css';

const Checkbox = ({ text }) => {
    return (
            <div className="checkbox">
                <label className="checkbox__container">
                    <input className="checkbox__input" type="checkbox"></input>
                    <span class="checkbox__mark"></span>
                </label>
                <p className="checkbox__description">{text}</p>
            </div>
    );
};

export default Checkbox;