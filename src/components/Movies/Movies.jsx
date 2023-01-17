import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavMenu from '../NavMenu/NavMenu';
import './Movies.css';

const Movies = () => {
    return (
        <main className="main">
            <div className="content">
                <Header />
                <NavMenu />
                <Footer />
            </div>
        </main>
    )
};

export default Movies;
