import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="side-nav-bar">
                    <Link 
                        to="/browse/featured"
                        className="side-bar-logo"
                        >
                        <img
                            src="images/bayify-logo.png"
                            alt="logo"
                            className="bayify-logo-inverted" />
                        <h3 className="logo-title">Bayify</h3>
                    </Link>

                <div className="home-nav-link-containter">
                    <NavLink 
                        to="/browse/featured"
                        className="home-nav-links"
                        activeClassName="nav-link-active"
                        >
                        {/* TRY TO FIGURE OUT HOW TO SWAP SVG ELEMENTS WHEN NOT ACTIVE */}
                        
                        {/* <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill="currentColor"></path></svg> */}
                        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>

                        <h3 className="nav-links">Home</h3>
                    </NavLink>

                    <NavLink 
                        to="/search/recent"
                        className="home-nav-links"
                        activeClassName="nav-link-active"
                        >
                        <svg viewBox="0 0 512 512" width="24" height="24" 
                            xmlns="http://www.w3.org/2000/svg"><path d="M357.079 
                            341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 
                            30.476-100.826 30.476-36.826 
                            0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 
                            14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 
                            70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 
                            23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 
                            357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 
                            11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 
                            11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 
                            29.588 44.19 44.19 29.587 53.841 11.048z" fill="currentColor"></path>
                        </svg>
                        <h3 className="nav-links">Search</h3>
                    </NavLink>

                    <NavLink 
                        to="/collection/playlists"
                        className="home-nav-links"
                        // className={`home-nav-links ${this.props.match.path === "collection" ? "nav-link-active" : ""}`}
                        activeClassName="nav-link-active"
                        >
                        <svg viewBox="0 0 512 512" width="24" height="24" 
                            xmlns="http://www.w3.org/2000/svg"><path d="M311.873 77.46l166.349 
                            373.587-39.111 17.27-166.349-373.587zM64 
                            463.746v-384h42.666v384h-42.666zM170.667 
                            463.746v-384h42.667v384h-42.666z" 
                            fill="currentColor"></path>
                        </svg>
                        <h3 className="nav-links">Your Library</h3>
                    </NavLink>
                </div>

                <section className="home-nav-recent-container">
                    
                    <h3 className="recently-played-title">RECENTLY PLAYED</h3>

                    <ul className="recently-played-ul">

                        {/* TODO: Add path's for the links to the songs/playlists/artists */}
                    
                        <NavLink 
                            to={`the path for the recently played item`}
                            activeClassName="nav-link-active">
                            <li>
                                <span>
                                <h2 className="recently-played-name">Mac Dre</h2>
                                <h3 className="recently-played-type">ARTIST</h3>
                                </span>
                            </li>
                        </NavLink>
                        <NavLink 
                            to={`the path for the recently played item`}
                            activeClassName="nav-link-active">
                            <li>
                                <h2 className="recently-played-name">My Ghetto Report Card</h2>
                                <h3 className="recently-played-type">ALBUM</h3>
                            </li>
                        </NavLink>
                        <NavLink 
                            to={`the path for the recently played item`}
                            activeClassName="nav-link-active">
                            <li>
                                <h2 className="recently-played-name">G-Eazy</h2>
                                <h3 className="recently-played-type">ARTIST</h3>
                            </li>
                        </NavLink>
                        <NavLink 
                            to={`the path for the recently played item`}
                            activeClassName="nav-link-active">
                            <li>
                                <h2 className="recently-played-name">Yay Area</h2>
                                <h3 className="recently-played-type">PLAYLIST</h3>
                            </li>
                        </NavLink>
                    </ul>

                </section>

                <section className="profile-section">
                    {/* TODO: add profile photo for currentUser */}
                    
                    <span>
                        <img
                            src="/images/profile_photos/Steph_Curry.jpg"
                        />
                        <h4>{this.props.currentUser.username}</h4>
                    </span>
                    <button onClick={this.props.logout}>LOG OUT</button>
                </section>

            </nav>
        );
    }
}