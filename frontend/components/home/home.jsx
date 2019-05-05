import React from 'react';
import Splash from '../splash/splash';
import BrowseContainer from '../browse/browse_container';
import SideNavBarContainer from '../side_nav_bar/side_nav_bar_container';
import MusicPlayerContainer from '../music_player/music_player_container';
import { ProtectedRoute } from '../../util/route_util';
import CollectionContainer from '../collection/collection_container';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Added so that upon visiting the home page, the browse component link 
        // is rendered first and the css highlighting is rendered to the home link.
        this.props.history.push("/browse/featured");
    }

    render() {
        return this.props.currentUser ? (
            <main className="home-body">
                <SideNavBarContainer />

                {/* TEST IMAGE */}
                {/* <img src="/images/artists/g-eazy_background.jpeg" alt="" /> */}
                
                <ProtectedRoute exact path="/browse/featured" component={BrowseContainer}/>
                <ProtectedRoute exact path="/browse/charts" component={BrowseContainer}/>
                <ProtectedRoute exact path="/browse/genres" component={BrowseContainer}/>
                {/* <ProtectedRoute exact path="/search/recent" component={}/> */}
                <ProtectedRoute exact path="/collection/playlists" component={CollectionContainer}/>
                <ProtectedRoute exact path="/collection/tracks" component={CollectionContainer}/>
                <ProtectedRoute exact path="/collection/albums" component={CollectionContainer}/>
                <ProtectedRoute exact path="/collection/artists" component={CollectionContainer}/>
                <MusicPlayerContainer />
            </main>
        ) : (
            <Splash />
        );
    }
}