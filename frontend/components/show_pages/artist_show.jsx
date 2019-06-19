import React from 'react';
import { Link } from 'react-router-dom';
import { ImpulseSpinner } from 'react-spinners-kit';
import { FaEllipsisH } from 'react-icons/fa';
import { followArtist, unfollowArtist } from '../../util/artist_utils';

export default class ArtistShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderDropDown: false,
            loading: true
        };

        this.revealDropdown = this.revealDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.trackTime = this.trackTime.bind(this);
        this.playArtist = this.playArtist.bind(this);
    }

    revealDropdown(e) {
        e.preventDefault();
        this.setState({ renderDropDown: true }, () => {
            document.addEventListener('click', this.hideDropdown);
        });
    }

    hideDropdown() {
        this.setState({ renderDropDown: false }, () => {
            document.removeEventListener('click', this.hideDropdown);
        });
    }

    trackTime(time) {
        const min = Math.floor(time / 60);
        let sec = time % 60;
        if (sec < 10) sec = `0${sec}`;
        return (
            `${min}:${sec}`
        );
    }

    playArtist() {
        const firstTrackKey = Object.keys(this.props.tracks)[0];
        const firstTrack = this.props.tracks[firstTrackKey];
        this.props.setQueue(Object.values(this.props.tracks));
        this.props.play(firstTrack);
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId)
            .then(res => this.setState({ loading: false }));
    }

    render() {
        if (!this.props.artist || this.props.artist === undefined || Object.entries(this.props.artist).length === 0) return null;
        if (!this.props.albums || this.props.albums === undefined || Object.entries(this.props.albums).length === 0) return null;
        if (!this.props.tracks || this.props.tracks === undefined || Object.entries(this.props.tracks).length === 0) return null;

        const albums = Object.values(this.props.albums);
        
        return (
            <div className="artist-show-container">

                {this.state.loading ?
                    (<div className="loading-container">
                        <ImpulseSpinner size={50} />
                    </div>) : 

                (<>
                    <header className="artist-info-container">
                        <img className="artist-show-background-photo"
                            src={this.props.artist.backgroundPhoto}/>
                        <h1 className="artist-name"
                            >{this.props.artist.name}</h1>
                        <button 
                            className="green-button" 
                            id="play-button"
                            onClick={this.playArtist}>
                            PLAY
                        </button>

                        <div className="elipsis-playlist-dropdown-container">
                            <div
                                onClick={this.revealDropdown}
                                className="elipsis-artist-icon">
                                <FaEllipsisH />
                            </div>

                            {this.state.renderDropDown ? (
                                <ul id="artist-dropdown-menu"
                                    className="elipsis-playlist-dropdown-menu">
                                    {!this.props.followed ? (
                                        <li>
                                            <button onClick={() => followArtist(
                                                this.props.currentUser.id,
                                                this.props.artist.id
                                            )}>
                                                Follow Artist
                                    </button>
                                        </li>
                                    ) : (
                                            <li>
                                                <button onClick={() => unfollowArtist(
                                                    this.props.currentUser.id,
                                                    this.props.artist.id
                                                )}>
                                                    Unfollow Artist
                                    </button>
                                            </li>
                                        )
                                    }

                                </ul>
                            ) : null}
                        </div>
                    </header>

                    <div className="separator"></div>

                    <div className="artists-albums-show-container">
                        <h2>Albums</h2>
                        <ul className="artists-albums-show">
                            {albums.map((album) => {
                                return (
                                    <li key={album.id}
                                        className="album-list-item">
                                        <Link to={`/albums/${album.id}`}>
                                            <img src={album.albumPhoto} alt={`${album.title} photo`} />
                                            <h3 className="album-show-title">{album.title}</h3>
                                        </Link>

                                        <h4>{this.props.artist.name}</h4>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </>)}
            </div>
        );
    }
}
