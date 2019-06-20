import React from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisH, FaPlay } from 'react-icons/fa';
import { IoIosMusicalNote } from 'react-icons/io';

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

    handlePlay(track) {
        const tracks = Object.values(this.props.tracks);
        const selectedTrackIdx = tracks.indexOf(this.props.track);
        const queue = tracks.slice(selectedTrackIdx + 1);
        this.props.setQueue(queue);
        this.props.play(track);
    }

    render() {
        if (!this.props.artists || this.props.artists === undefined || Object.entries(this.props.artists).length === 0) return null;
        if (!this.props.albums || this.props.albums === undefined || Object.entries(this.props.albums).length === 0) return null;
        if (!this.props.track  || this.props.track  === undefined || Object.entries(this.props.track ).length === 0) return null;

        const track = this.props.track;
        if (this.props.albums[track.album_id] === undefined) return null;
        const album = this.props.albums[track.album_id];
        if (this.props.artists[album.artist_id] === undefined) return null;
        const artist = this.props.artists[album.artist_id];
        let owner = false;

        let playlistId;
        let playlistTrackId;
        if (this.props.path.includes("playlists/")) {
            playlistId = Number(this.props.path.slice(11));
            let currentPlaylist = this.props.playlists[playlistId];
            if (currentPlaylist.playlist_tracks[track.id].id === undefined) return null;
            playlistTrackId = currentPlaylist.playlist_tracks[track.id].id;
            if (currentPlaylist.curator_id === this.props.currentUser.id) owner = true;
        }
        

        return (
            <>
                <div 
                    className="track-item-container"
                    to={`/tracks/${track.id}`}
                    onDoubleClick={() => this.handlePlay(track)}>
                    <div className="track-item-icon">
                        <IoIosMusicalNote id="musical-note-icon"/>
                        <FaPlay id="fa-play-icon" onClick={() => this.handlePlay(track)}/>
                    </div>
                    <div className="track-info-links-container">
                        <h2
                            id={this.props.currentTrackId === track.id ? "track-active" : null}
                            >{track.title}</h2>
                        <div className="track-info-links">
                        <Link
                            to={`/artists/${artist.id}`}
                            id={this.props.currentTrackId === track.id ? "track-active" : null}>
                            {artist.name}
                        </Link>
                        <p>·</p>
                        <Link
                            to={`/albums/${album.id}`}
                            id={this.props.currentTrackId === track.id ? "track-active" : null}>
                            {album.title}
                        </Link>
                        </div>
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
                                {this.props.path.includes("playlist") && owner ? (
                                        <li>
                                            <button
                                                onClick={() => this.props.removePlaylistTrack(playlistTrackId, track.id, playlistId)}
                                                >
                                                Remove from Playlist
                                            </button>
                                        </li>
                                    ) : (<div></div>)
                                }
                                {this.props.currentUser.savedTracks.includes(track.id) ? 
                                    (<li>
                                        <button 
                                            onClick={() => this.props.unfollowTrack(
                                                this.props.currentUser.id,
                                                track.id
                                            )}>
                                            Remove Song from Favories
                                        </button>
                                    </li>) : 
                                    (<li>
                                        <button
                                            onClick={() => this.props.followTrack(
                                                this.props.currentUser.id,
                                                track.id
                                            )}>
                                            Save Song to Favories
                                        </button>
                                    </li>)
                                }
                            </ul>
                    ) : null}
                </div>

                <div className="track-length">
                    <h2
                        id={this.props.currentTrackId === track.id ? "track-active" : null}>
                        {this.trackTime(track.track_length)}</h2>
                </div>
            </>
        );
    }
}

