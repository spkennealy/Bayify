import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistsIndexItem from '../collection/playlist_index_item';
import TrackIndexItem from '../collection/track_index_item';

export default class PlaylistShow extends React.Component {
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
    
    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        if (!this.props.playlist) {
            return null;
        }

        return (
            <div className="playlist-show-container">
                <aside className="playlist-info-container">
                    <PlaylistsIndexItem 
                        playlist={this.props.playlist}
                        curatorId={this.props.playlist.curator_id}/>

                    <button className="green-button" id="play-button">
                        PLAY
                    </button>
                </aside>

                <div className="playlist-tracks-show-container">
                    <ul className="playlist-tracks-show">
                        <TrackIndexItem />
                    </ul>
                </div>
            </div>
        );
    }
}
