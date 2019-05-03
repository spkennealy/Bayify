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
                
                <h3 className="recently-played-title">RECENTLY PLAYED</h3>

                <span>
                    <h2 className="recently-played-name">Mac Dre</h2>
                    <h3 className="recently-played-type">ARTIST</h3>
                </span>
                <span>
                    <h2 className="recently-played-name">My Ghetto Report Card</h2>
                    <h3 className="recently-played-type">ALBUM</h3>
                </span>
                <span>
                    <h2 className="recently-played-name">G-Eazy</h2>
                    <h3 className="recently-played-type">ARTIST</h3>
                </span>
                <span>
                    <h2 className="recently-played-name">Yay Area</h2>
                    <h3 className="recently-played-type">PLAYLIST</h3>
                </span>

            </section>

            <section className="profile-section">
                <img />
            </section>

            <button onClick={props.logout}>LOG OUT</button>
        </nav>
    </aside>
);

export default SideNavBar;