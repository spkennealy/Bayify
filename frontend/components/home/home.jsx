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

        this.selectBackgrounColor = this.selectBackgrounColor.bind(this);
        this.randomRGB = this.randomRGB.bind(this);
        this.setPathForSplash = this.setPathForSplash.bind(this);
    }

    randomRGB() {
        const num1 = Math.floor(Math.random() * 200) + 1;
        const num2 = Math.floor(Math.random() * 200) + 1;
        const num3 = Math.floor(Math.random() * 200) + 1;

        return `${num1}, ${num2}, ${num3}`;
    }

    selectBackgrounColor(path) {
        let backgroundStyle;

        switch(path) {
            case "/browse/featured":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(47, 64, 106), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/browse/charts":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(137, 16, 42), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/browse/genres":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(39, 37, 39), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/browse/newreleases":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(54, 81, 99), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/collection/playlists":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(21, 32, 38), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/collection/tracks":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(30, 50, 100), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/collection/albums":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(149, 111, 4), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case `/collection/artists`:
                backgroundStyle = {
                    backgroundImage: `linear-gradient(to right bottom, rgb(30, 41, 49), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)`
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/search/recent":
                backgroundStyle = {
                    backgroundImage: "linear-gradient(to right bottom, rgb(18, 18, 18), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                return (<div className="home-background-color" style={backgroundStyle}></div>);
            default:
                null;
        }

        if (path.includes('playlists') || path.includes('albums')) {
            backgroundStyle = {
                backgroundImage: `linear-gradient(to right bottom, rgb(${this.randomRGB()}), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)`
            };
            return (<div className="home-background-color" style={backgroundStyle}></div>);
        } else {
            backgroundStyle = {
                background: "black"
            };
            return (<div className="home-background-color" style={backgroundStyle}></div>);
        }
    }

    componentDidMount() {
        // Added so that upon visiting the home page, the browse component link 
        // is rendered first and the css highlighting is rendered to the home link.
        // TODO: remove push to collection/playlists and switch it to browse/featured.
        // this.props.history.push("/browse/featured");
        if (this.props.currentUser) this.props.history.push("/collection/playlists");
        // this.props.history.push("/artists/3");
    }
    
    setPathForSplash() {
        this.props.history.push("/");
    }

    render() {
        return this.props.currentUser ? (
            <main className="home-body">
                {/* <div className="home-background-color">
                </div> */}
                {this.selectBackgrounColor(this.props.location.pathname)}

                    <section className="side-nav-bar-container">
                        <SideNavBarContainer />
                    </section>

                    <section className="main-content-container">
                        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer}/>
                        <ProtectedRoute exact path="/artists/:artistId" component={ArtistShowContainer}/>
                        <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer}/>
                        <ProtectedRoute exact path="/browse/:section" component={CollectionContainer}/>
                        <ProtectedRoute exact path="/collection/:section" component={CollectionContainer}/>


                        {/* <ProtectedRoute exact path="/search/recent" component={}/> */}
                    </section>

                    <section className="music-player-container">
                        <MusicPlayerContainer history={this.props.history} params={this.props.match.params}/>
                    </section>
            </main>
        ) : (
            <>
                {this.props.location.pathname === "/" ? null : this.setPathForSplash()}
                <Splash />
            </>
        );
    }
}