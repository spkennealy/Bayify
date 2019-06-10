import React from 'react';
import TrackIndexItemContainer from '../collection/track_index_item_container';
import AlbumsIndexItem from '../collection/album_index_item';

export default class AlbumShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderDropDown: false
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
        this.props.fetchAlbum(this.props.match.params.albumId);
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
                <aside className="album-info-container">
                    <AlbumsIndexItem
                        album={this.props.album}
                        artists={this.props.artists} />

                    <button 
                        className="green-button" 
                        id="play-button"
                        onClick={this.playAlbum}>
                        PLAY
                    </button>
                </aside>

                <div className="playlist-tracks-show-container">
                    <ul className="playlist-tracks-show">
                        {tracks}
                    </ul>
                </div>
            </div>
        );
    }
}
