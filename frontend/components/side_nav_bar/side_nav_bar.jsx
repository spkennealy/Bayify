import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = (props) => (
    <aside>
        <nav>
            <div className="home-nav-link-containter">
                <Link 
                    to="/browse/featured"
                    className="home-nav-links"
                    >
                    <img
                        src="images/bayify-logo.png"
                        alt="logo"
                        className="bayify-logo-inverted" />
                    <h3 className="logo-title">Bayify</h3>
                </Link>

                <Link 
                    to="/browse/featured"
                    className="home-nav-links"
                    >
                    <h3 className="nav-links">Home</h3>
                </Link>

                <Link 
                    to="/search/recent"
                    className="home-nav-links"
                    >
                    <h3 className="nav-links">Search</h3>
                </Link>

                <Link 
                    to="/collection/playlists"
                    className="home-nav-links"
                    >
                    <h3 className="nav-links">Your Library</h3>
                </Link>
            </div>

            <section className="home-nav-recent-container">
                <h3>RECENTLY PLAYED</h3>
                {/* put seeded playlists/artists here */}
            </section>

            <button onClick={props.logout}>LOG OUT</button>
        </nav>
    </aside>
);

export default SideNavBar;