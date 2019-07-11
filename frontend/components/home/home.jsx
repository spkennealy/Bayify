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
import SearchContainer from '../search/search_container';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevPath: ""
        };

        // debugger;

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
        // let backgroundStyle;
        // let div = document.getElementsByClassName("home-background-color");
        // if (div.length === 0) return null;
        // console.log(`This is the props: ${this.props.history.location.pathname}`);
        // console.log(`This is the state: ${this.state.prevPath}`);

        // debugger;

        switch(path) {
            case "/browse/featured":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(47, 64, 106), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/browse/charts":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(137, 16, 42), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/browse/genres":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(37, 34, 48), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/browse/newreleases":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(54, 81, 99), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/collection/playlists":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(130, 114, 23), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/collection/tracks":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(30, 50, 100), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/collection/albums":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(55, 89, 98), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case `/collection/artists`:
                return {
                    backgroundImage: `linear-gradient(to right bottom, rgb(30, 41, 49), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)`
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            case "/search/recent":
                return {
                    backgroundImage: "linear-gradient(to right bottom, rgb(18, 18, 18), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)"
                };
                // return (<div className="home-background-color" style={backgroundStyle}></div>);
            default:
                null;
        }

        // if (this.props.history.location.pathname === this.state.prevPath) return null;

        if (path.includes('playlists') || path.includes('albums')) {
            return {
                backgroundImage: `linear-gradient(to right bottom, rgb(${this.randomRGB()}), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)`
            };
            // return (<div className="home-background-color" style={backgroundStyle}></div>);
        } else {
            return {
                background: "black"
            };
            // return (<div className="home-background-color" style={backgroundStyle}></div>);
        }
    }

    componentDidMount() {
        // Added so that upon visiting the home page, the browse component link 
        // is rendered first and the css highlighting is rendered to the home link.
        // TODO: remove push to collection/playlists and switch it to browse/featured.
        if (this.props.history.location.pathname === "/") this.props.history.push("/browse/featured");
        // this.setState({ prevPath: this.props.location.pathname });
        // debugger
        // this.selectBackgrounColor(this.props.location.pathname);
        // if (this.props.currentUser) this.props.history.push("/collection/playlists");
    }

    // componentDidUpdate(prevProps) {
    //     // debugger
    //     if (prevProps.location.pathname !== this.props.location.pathname) {
    //         this.setState({ prevPath: this.props.location.pathname });
    //         // this.selectBackgrounColor(this.props.location.pathname);
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        // debugger;
        if (nextProps.location.pathname !== this.state.pathname) {
            this.setState({ prevPath: this.props.location.pathname });
        }
    }
    
    setPathForSplash() {
        this.props.history.push("/");
    }

    render() {
        // console.log(`This is the render beginning and the state path: ${this.state.prevPath}`);
        return this.props.currentUser ? (
            <main className="home-body">
                <div className="home-background-color" style={this.selectBackgrounColor(this.props.location.pathname)}></div>

                    <section className="side-nav-bar-container">
                        <SideNavBarContainer />
                    </section>

                    <section className="main-content-container">
                        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer}/>
                        <ProtectedRoute exact path="/artists/:artistId" component={ArtistShowContainer}/>
                        <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer}/>
                        <ProtectedRoute exact path="/browse/:section" component={BrowseContainer}/>
                        <ProtectedRoute exact path="/collection/:section" component={CollectionContainer}/>
                        <ProtectedRoute exact path="/search/recent" component={SearchContainer}/>
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