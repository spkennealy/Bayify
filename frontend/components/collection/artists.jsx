import React from 'react';
import { Link } from 'react-router-dom';
// import SideNavBarContainer from '../side_nav_bar/side_nav_bar_container';

const Artists = (props) => (
    <main className="collection-artists-index">
        <CollectionNav />
        <Link 
            onClick={props.newPlaylist()}
        >NEW PLAYLIST</Link>
    </main>
);

export default Artists;