import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = (props) => (
    <aside>
        <nav>
            <Link to="/browse/featured">
                <img
                    src="images/bayify-logo.png"
                    alt="logo"
                    className="bayify-logo-inverted" />
                <h3 className="logo-title">Bayify</h3>
            </Link>
            <Link to="/browse/featured">
                <h3 className="nav-links">Home</h3>
            </Link>
            <Link to="/search/recent">
                <h3 className="nav-links">Search</h3>
            </Link>
            <Link to="/collection/playlists">
                <h3 className="nav-links">Your Library</h3>
            </Link>
        </nav>
    </aside>
);

export default SideNavBar;