import React from 'react';
import Splash from '../splash/splash';
import BrowseContainer from '../browse/browse_container';
import SideNavBarContainer from '../side_nav_bar/side_nav_bar_container';
import MusicPlayerContainer from '../music_player/music_player_container';
import { ProtectedRoute } from '../../util/route_util';
import { Switch } from 'react-router-dom';
import CollectionContainer from '../collection/collection_container';

const Home = (props) => {
    return props.currentUser ? (
        <div className="home-body">
            <SideNavBarContainer />

            {/* TEST IMAGE */}
            <img src="/images/artists/g-eazy_background.jpeg" alt="" />
            
            <ProtectedRoute exact path="/browse/featured" component={BrowseContainer}/>
            <ProtectedRoute exact path="/browse/charts" component={BrowseContainer}/>
            <ProtectedRoute exact path="/browse/genres" component={BrowseContainer}/>
            {/* <ProtectedRoute exact path="/search/recent" component={}/> */}
            <ProtectedRoute exact path="/collection/playlists" component={CollectionContainer}/>
            <ProtectedRoute exact path="/collection/tracks" component={CollectionContainer}/>
            <ProtectedRoute exact path="/collection/albums" component={CollectionContainer}/>
            <ProtectedRoute exact path="/collection/artists" component={CollectionContainer}/>
            <MusicPlayerContainer />
        </div>
    ) : (
        <Splash />
    );
};

export default Home;