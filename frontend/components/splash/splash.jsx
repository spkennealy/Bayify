import React from 'react';
import { Link } from 'react-router-dom';
import NavSplash from './nav_splash';

const Splash = () => {
    return (
        <>
            <NavSplash />
            <article className="splash-body">
                <h1 
                    className="splash-body-tagline"
                    >Bay music for everyone.</h1>
                <h5>Hundreds of songs. No credit card needed.</h5>
                <Link 
                    to="/signup"
                    className="green-button splash-button"
                    >GET BAYIFY FREE</Link>
            </article>
        </>
    );
};

export default Splash;