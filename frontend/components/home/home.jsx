import React from 'react';
import Splash from '../splash/splash';
import BrowseContainer from '../browse/browse_container';
import SideNavBarContainer from '../side_nav_bar/side_nav_bar_container';
import MusicPlayerContainer from '../music_player/music_player_container';
import { ProtectedRoute } from '../../util/route_util';
import CollectionContainer from '../collection/collection_container';
import PlaylistShowContainer from '../show_pages/playlist_show_container';
import AlbumShowContainer from '../show_pages/album_show_container';
import ArtistShowContainer from '../show_pages/artist_show_container';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
        // Added so that upon visiting the home page, the browse component link 
        // is rendered first and the css highlighting is rendered to the home link.
        // TODO: remove push to collection/playlists and switch it to browse/featured.
        // this.props.history.push("/browse/featured");
        // this.props.history.push("/collection/playlists");
        this.props.history.push("/artists/1");
    }

    render() {
        return this.props.currentUser ? (
            <main className="home-body">
                <div className="home-background-color">
                
                </div>
                    <section className="side-nav-bar-container">
                        <SideNavBarContainer />
                    </section>

                    <section className="main-content-container">
                        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer}/>
                        <ProtectedRoute exact path="/artists/:artistId" component={ArtistShowContainer}/>
                        <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer}/>
                        <ProtectedRoute exact path="/browse/:section" component={BrowseContainer}/>
                        <ProtectedRoute exact path="/collection/:section" component={CollectionContainer}/>


                        {/* <ProtectedRoute exact path="/search/recent" component={}/> */}
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