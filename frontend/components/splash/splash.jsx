import React from 'react';
import { Link } from 'react-router-dom';
import NavSplash from './nav_splash';

const Splash = () => {
    return (
        <div className="splash-body">
            <NavSplash />
            <article className="splash-article">
                <svg xmlns="http://www.w3.org/2000/svg"></svg>
                <div className="splash-text">
                    <p className="splash-body-tagline"
                        >Music for everyone.</p>
                    <p>Hundreds of songs, all bay area artists. No credit card needed.</p>
                    <p></p>
                    <Link 
                        to="/signup"
                        className="green-button splash-button"
                        >GET BAYIFY FREE</Link>
                </div>
            </article>
        </div>
    );
};

export default Splash;