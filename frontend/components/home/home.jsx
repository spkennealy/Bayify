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
        // TODO: remove push to collection/playlists and switch it to browse/featured.
        // this.props.history.push("/browse/featured");
        this.props.history.push("/collection/playlists");
    }

    render() {
        return this.props.currentUser ? (
            <main className="home-body">
                <section className="side-nav-bar-container">
                    <SideNavBarContainer />
                </section>

                {/* TEST IMAGE */}
                {/* <img src="/images/artists/g-eazy_background.jpeg" alt="" /> */}
                <section className="main-content-container">
                    <ProtectedRoute exact path="/browse/:section" component={BrowseContainer}/>
                    {/* <ProtectedRoute exact path="/browse/charts" component={BrowseContainer}/>
                    <ProtectedRoute exact path="/browse/genres" component={BrowseContainer}/> */}
                    {/* <ProtectedRoute exact path="/search/recent" component={}/> */}
                    <ProtectedRoute exact path="/collection/:section" component={CollectionContainer}/>
                    {/* <ProtectedRoute exact path="/collection/:section" component={CollectionContainer}/>
                    <ProtectedRoute exact path="/collection/:section" component={CollectionContainer}/>
                    <ProtectedRoute exact path="/collection/:section" component={CollectionContainer}/> */}
                </section>

                <section className="music-player-container">
                    <MusicPlayerContainer />
                </section>
            </main>
        ) : (
            <Splash />
        );
    }
}