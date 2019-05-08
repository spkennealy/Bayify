import React from 'react';
import { NavLink } from 'react-router-dom';

const CollectionNav = (props) => (
    <nav className="collection-nav">
        <ul>
            <li>
                <NavLink 
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/collection/playlists">
                    Playlists
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/collection/tracks">
                    Songs
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/collection/albums">
                    Albums
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className="collection-nav-link"
                    activeClassName="collection-nav-link-active"
                    to="/collection/artists">
                    Artists
                </NavLink>
            </li>
        </ul>
        
        <div className="new-playlist-button-container">
            <button 
                className="green-button" 
                id="new-playlist-button"
                onClick={() => props.openModal({ modalType: "createPlaylist" })}>
                
                NEW PLAYLIST
            </button>
        </div>
    </nav>
);

export default CollectionNav;