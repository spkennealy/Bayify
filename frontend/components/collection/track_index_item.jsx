import React from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';

export default class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderDropDown: false
        };

        this.revealDropdown = this.revealDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.trackTime = this.trackTime.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
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

    componentDidMount() {
        this.props.fetchAlbums();
        this.props.fetchArtists();
    }

    handlePlay(track) {
        this.props.play(track);
    }

    render() {
        if (!this.props.artists || this.props.artists === undefined || Object.entries(this.props.artists).length === 0) return null;
        if (!this.props.albums || this.props.albums === undefined || Object.entries(this.props.albums).length === 0) return null;
        if (!this.props.track  || this.props.track  === undefined || Object.entries(this.props.track ).length === 0) return null;

        const track = this.props.track;
        const album = this.props.albums[track.album_id];
        const artist = this.props.artists[album.artist_id];

        if (artist[undefined]) return null;

        // debugger;

        return (
            <>
                <div 
                    className="track-item-container"
                    to={`/tracks/${track.id}`}
                    onDoubleClick={() => this.handlePlay(track)}>
                    <h2>{track.title}</h2>
                    <div className="track-info-links">
                    <Link
                        to={`/artists/${artist.id}`}>
                        {artist.name}
                    </Link>
                    <p>·</p>
                    <Link
                        to={`/albums/${album.id}`}>
                        {album.title}
                    </Link>
                    </div>
                </div>

                <div className="elipsis-dropdown-container">
                    <div
                        onClick={this.revealDropdown}
                        className="elipsis-icon">
                        <FaEllipsisH />
                    </div>

                    {this.state.renderDropDown ? (
                            <ul className="elipsis-dropdown-menu">
                                <li>
                                    <button
                                        onClick={() => this.props.openModal({
                                            modalType: "addPlaylistTrack",
                                            currentTrackId: track.id 
                                        })}>
                                        Add to Playlist
                                    </button>
                                </li>
                                <li>
                                    <button
                                        // onClick={() => this.props.removePlaylistTrack()}
                                        >
                                        Remove from Playlist
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        Save Song to Favories
                                    </button>
                                </li>
                            </ul>
                    ) : null}
                </div>

                <div className="track-length">
                    <h2>{this.trackTime(track.track_length)}</h2>
                </div>
            </>
        );
    }
}

