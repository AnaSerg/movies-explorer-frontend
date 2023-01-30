import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const navigate = useNavigate();

    const returnBack = () => {
        navigate(-1);
    }

    return (
        <div className="error-page">
            <div className="error-page__container">
                <h2 className="error-page__title">404</h2>
                <p className="error-page__subtitle">Страница не найдена</p>
                <button onClick={returnBack} className="error-page__button">Назад</button>
            </div>
        </div>
    );
};

export default ErrorPage;