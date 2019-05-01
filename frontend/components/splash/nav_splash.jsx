import React from 'react';
import { Link } from 'react-router-dom';

const NavSplash = () => {
    return (
        <header className="nav-splash">
            <div className="nav-splash-logo">
                <img
                    src="images/bayify-logo.png"
                    alt="logo"
                    className="bayify-logo-inverted" />
                <h3 className="logo-title">Bayify</h3>
            </div>
            <div className="nav-splash-links">
                <div>
                    <Link 
                        to="/signup"
                        >Sign up</Link>
                </div>
                <div>
                    <Link 
                        to="/login"
                        >Log In</Link>
                </div>
            </div>
        </header>
    );
};

export default NavSplash;