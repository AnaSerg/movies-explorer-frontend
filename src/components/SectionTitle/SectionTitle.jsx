import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({title, className}) => {
    return (
        <h2 className={className}>{title}</h2>
    )
};

export default SectionTitle;