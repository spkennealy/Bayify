import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import PlaylistsIndexItem from '../collection/playlist_index_item';
import TrackIndexItemContainer from '../collection/track_index_item_container';

export default class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderDropDown: false
        };

        this.revealDropdown = this.revealDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.trackTime = this.trackTime.bind(this);
        this.playPlaylist = this.playPlaylist.bind(this);
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

    playPlaylist() {
        const firstTrackKey = Object.keys(this.props.tracks)[0];
        const firstTrack = this.props.tracks[firstTrackKey];
        this.props.setQueue(Object.values(this.props.tracks));
        this.props.play(firstTrack);
    }
    
    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        if (!this.props.playlist || !this.props.tracks) {
            return null;
        }

        return (
            <div className="playlist-show-container">
                <aside className="playlist-info-container">
                    <PlaylistsIndexItem 
                        playlist={this.props.playlist}
                        curatorId={this.props.playlist.curator_id}/>

                    <button 
                        className="green-button" 
                        id="play-button"
                        onClick={this.playPlaylist}>
                        PLAY
                    </button>

                    <div className="elipsis-playlist-dropdown-container">
                        <div
                            onClick={this.revealDropdown}
                            className="elipsis-playlist-icon-playlist">
                            <FaEllipsisH />
                        </div>

                        {this.state.renderDropDown ? (
                            <ul className="elipsis-playlist-dropdown-menu">
                                <li>
                                    <button
                                        onClick={() => this.props.openModal({
                                            modalType: "deletePlaylist",
                                            playlistId: this.props.playlist.id
                                        })}>
                                        Delete Playlist
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
                </aside>

                <div className="playlist-tracks-show-container">
                    <ul className="playlist-tracks-show ">
                        {this.props.playlist.track_ids.map((trackId) => {
                            const track = this.props.tracks[trackId];
                            return (
                                <li key={trackId}
                                    className="track-list-item">
                                    <TrackIndexItemContainer
                                        track={track}
                                        openModal={this.props.openModal}
                                        path={this.props.path}/>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
