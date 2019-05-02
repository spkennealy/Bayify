import React from 'react';
import Splash from '../splash/splash';
import BrowseContainer from '../browse/browse_container';
import SideNavBarContainer from '../side_nav_bar/side_nav_bar_container';
import MusicPlayerContainer from '../music_player/music_player_container';

const Home = (props) => {
    return props.currentUser ? (
        <>
            <SideNavBarContainer />
        </>
    ) : (
        <Splash />
    );
};

export default Home;

/*
<BrowseContainer />
<MusicPlayerContainer />
*/