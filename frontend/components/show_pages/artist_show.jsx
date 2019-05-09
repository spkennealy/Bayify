import React from 'react';
import TrackIndexItemContainer from '../collection/track_index_item_container';
import { Link } from 'react-router-dom';

export default class ArtistShow extends React.Component {
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
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render() {
        if (!this.props.artist || this.props.artist === undefined || Object.entries(this.props.artist).length === 0) return null;
        if (!this.props.albums || this.props.albums === undefined || Object.entries(this.props.albums).length === 0) return null;
        if (!this.props.tracks || this.props.tracks === undefined || Object.entries(this.props.tracks).length === 0) return null;

        const albums = Object.values(this.props.albums);
        
        return (
            <div className="artist-show-container">
                <header className="artist-info-container">
                    <img className="artist-show-background-photo"
                        src={this.props.artist.backgroundPhoto}/>
                    <h1 className="artist-name"
                        >{this.props.artist.name}</h1>
                    <button className="green-button" id="play-button">
                        PLAY
                    </button>
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
                                        <h3 id="album-show-title">{album.title}</h3>
                                    </Link>

                                    <h4>{this.props.artist.name}</h4>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
