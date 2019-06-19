import React from 'react';
import TrackIndexItemContainer from '../collection/track_index_item_container';
import AlbumsIndexItem from '../collection/album_index_item';
import { ImpulseSpinner } from 'react-spinners-kit';
import { FaEllipsisH } from 'react-icons/fa';
import { followAlbum, unfollowAlbum } from '../../util/album_utils';

export default class AlbumShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderDropDown: false,
            loading: true
        };

        this.revealDropdown = this.revealDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.trackTime = this.trackTime.bind(this);
        this.playAlbum = this.playAlbum.bind(this);
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

    playAlbum() {
        const firstTrackKey = Object.keys(this.props.tracks)[0];
        const firstTrack = this.props.tracks[firstTrackKey];
        this.props.setQueue(Object.values(this.props.tracks));
        this.props.play(firstTrack);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
            .then(res => this.setState({ loading: false }));
    }

    render() {
        if (!this.props.album || this.props.album === undefined || Object.entries(this.props.album).length === 0) return null;
        if (!this.props.tracks || this.props.tracks === undefined || Object.entries(this.props.tracks).length === 0) return null;

        if (this.props.album.track_ids === undefined) return null;

        const tracks = (
            this.props.album.track_ids.map((trackId) => {
                const track = this.props.tracks[trackId];
                return (
                    <li key={trackId}
                        className="track-list-item"
                        id={track && this.props.currentTrackId === track.id ? "track-container-active" : null}>
                        <TrackIndexItemContainer
                            track={track}
                            openModal={this.props.openModal} />
                    </li>
                );
            })
        );

        return (
            <div className="playlist-show-container">
                
                {this.state.loading ?
                    (<div className="loading-container">
                        <ImpulseSpinner size={50} />
                    </div>) : 

                (<>
                    <aside className="album-info-container">
                        <div id="album-show-info">
                            <AlbumsIndexItem
                                album={this.props.album}
                                artists={this.props.artists} />
                        </div>
                        <button 
                            className="green-button" 
                            id="play-button"
                            onClick={this.playAlbum}>
                            PLAY
                        </button>

                        <div className="elipsis-playlist-dropdown-container">
                            <div
                                onClick={this.revealDropdown}
                                className="elipsis-playlist-icon-playlist">
                                <FaEllipsisH />
                            </div>

                            {this.state.renderDropDown ? (
                                <ul id="album-dropdown-menu"
                                    className="elipsis-playlist-dropdown-menu">
                                    {!this.props.followed ? (
                                        <li>
                                            <button onClick={() => followAlbum(
                                                this.props.currentUser.id,
                                                this.props.album.id
                                            )}>
                                                Follow Album
                                        </button>
                                        </li>
                                    ) : (
                                            <li>
                                                <button onClick={() => unfollowAlbum(
                                                    this.props.currentUser.id,
                                                    this.props.album.id
                                                )}>
                                                    Unfollow Album
                                        </button>
                                            </li>
                                        )
                                    }

                                </ul>
                            ) : null}
                        </div>
                    </aside>

                    <div className="playlist-tracks-show-container">
                        <ul className="playlist-tracks-show">
                            {tracks}
                        </ul>
                    </div>
                </>)}
            </div>
        );
    }
}
