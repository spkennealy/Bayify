import React from 'react';
import { Link } from 'react-router-dom';
import { searchAll } from '../../actions/search_actions';
import ArtistIndexItem from '../collection/artist_index_item';
import PlaylistIndexItem from '../collection/playlist_index_item';
import { FaEllipsisH, FaPlay } from 'react-icons/fa';
import { IoIosMusicalNote } from 'react-icons/io';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            artists: [],
            playlists: [],
            albums: [],
            tracks: [],
            renderDropDown: false
        };

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.search = this.search.bind(this);
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

    handleSearchInput(e) {
        this.setState({
            input: e.target.value
        }, () => this.search());
    }

    search() {
        if (this.state.input.length === 0) {
            this.setState({
                artists: [],
                playlists: [],
                albums: [],
                tracks: []
            });
            return;
        }

        searchAll(this.state.input)
            .then(res => {
                let searchedArtists = [];
                let searchedPlaylists = [];
                let searchedAlbums = [];
                let searchedTracks = [];

                if (res.artists) searchedArtists = Object.values(res.artists);
                if (res.playlists) searchedPlaylists = Object.values(res.playlists);
                if (res.albums) searchedAlbums = Object.values(res.albums);
                if (res.tracks) searchedTracks = Object.values(res.tracks);

                this.setState({
                        artists: searchedArtists,
                        playlists: searchedPlaylists,
                        albums: searchedAlbums,
                        tracks: searchedTracks
                    });
            });
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    render() {
        return (
            <>
                <form className="search-container">
                    <div className="search-input-box">
                        <input 
                            className="search-input"
                            placeholder="Start typing..."
                            onChange={this.handleSearchInput}
                            type="text"/>
                    </div>
                </form>

                <ul className="search-results">

                    {(this.state.artists.length === 0 &&
                        this.state.playlists.length === 0 &&
                        this.state.albums.length === 0 &&
                        this.state.tracks.length === 0 &&
                        this.state.input.length > 0) ? (
                            <div className="no-results">
                                <h2 className="no-results-title">No results found for "{this.state.input}"</h2>
                                <p className="no-results-suggestion">Please make sure your words are spelled 
                                correctly or use less or different keywords</p>
                            </div>) : null}
                    
                    {this.state.artists.length > 0 ? (
                        <li className="artists-search-results-container">
                            <h3>Artists</h3>
                            <ul className="artist-index">
                                {this.state.artists.map(artist => (
                                    <li key={artist.id}>
                                        <ArtistIndexItem artist={artist}/>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : null}

                    {this.state.playlists.length > 0 ? (
                        <li className="playlists-search-results-container">
                            <h3>Playlists</h3>
                            <div className="playlist-index-container">
                                <ul className="playlist-index">
                                    {this.state.playlists.map(playlist => (
                                        <li key={playlist.id}>
                                            <PlaylistIndexItem 
                                                id="playlist-search-item"
                                                playlist={playlist} 
                                                curatorId={playlist.curator_id}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ) : null}

                    {this.state.albums.length > 0 ? (
                        <li className="albums-search-results-container">
                            <h3>Albums</h3>
                            <div className="album-index-container">
                                <ul className="album-index">
                                    {this.state.albums.map(album => (
                                        <li key={album.id}>
                                            <Link to={`/albums/${album.id}`}>
                                                <img src={album.albumPhoto} alt={`${album.title} photo`} />
                                                <h2 className="album-show-title">{album.title}</h2>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ) : null}

                    {this.state.tracks.length > 0 ? (
                        <li className="tracks-search-results-container">
                            <h3>Songs</h3>
                            <div className="track-index-container">
                                <ul className="track-index">
                                    {this.state.tracks.map(track => (
                                        <li key={track.id}
                                            className="track-list-item"
                                            onDoubleClick={() => this.props.play(track)}>
                                            <div className="track-item-container">
                                                <div className="track-item-icon">
                                                    <IoIosMusicalNote id="musical-note-icon" />
                                                    <FaPlay id="fa-play-icon" 
                                                        onClick={() => this.props.play(track)} 
                                                        />
                                                </div>
                                                <div className="track-info-links-container">
                                                    <h2
                                                        id={this.props.currentTrackId === track.id ? "track-active" : null}
                                                    >{track.title}</h2>
                                                    <div className="track-info-links">
                                                        <Link
                                                            to={`/artists/${track.artist.id}`}
                                                            id={this.props.currentTrackId === track.id ? "track-active" : null}>
                                                            {track.artist.name}
                                                        </Link>
                                                        <p>·</p>
                                                        <Link
                                                            to={`/albums/${track.album_id}`}
                                                            id={this.props.currentTrackId === track.id ? "track-active" : null}>
                                                            {track.album.title}
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
                                                        <li id="search-dropdown">
                                                            <button
                                                                onClick={() => this.props.openModal({
                                                                    modalType: "addPlaylistTrack",
                                                                    currentTrackId: track.id
                                                                })}>
                                                                Add to Playlist
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    ) : (<div></div>)
                                                }
                                                {/* <li>
                                                    <button>
                                                        Save Song to Favories
                                                    </button>
                                                </li> */}
                                            </div>

                                            <div className="track-length">
                                                <h2
                                                    id={this.props.currentTrackId === track.id ? "track-active" : null}>
                                                    {this.trackTime(track.track_length)}</h2>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ) : null}
                    
                </ul>
            </>
        )
    }
};

export default Search;