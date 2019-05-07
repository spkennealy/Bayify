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

    render() {
        const track = this.props.track;
        const album = this.props.albums[this.props.track.album_id];
        const artist = this.props.artists[album.artist_id];

        return (
            <>
                <div 
                    className="track-item-container"
                    to={`/tracks/${track.id}`}>
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

