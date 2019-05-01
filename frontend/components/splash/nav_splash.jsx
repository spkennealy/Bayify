import React from 'react';
import { Link } from 'react-router-dom';

const NavSplash = () => {
    return (
        <header>
            <img
                src="images/bayify-logo.png"
                alt="logo"
                className="bayify-logo" />
            <h3 className="session-title">Bayify</h3>

            <Link 
                to="/signup"
                >Sign up</Link>
            <Link 
                to="/login"
                >Log In</Link>
        </header>
    );
};

export default NavSplash;