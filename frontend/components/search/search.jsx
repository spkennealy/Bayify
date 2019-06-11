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
            tracks: []
        };

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.search = this.search.bind(this);
    }

    handleSearchInput(e) {
        this.setState({
            input: e.target.value
        }, () => this.search());

        console.log(this.state);
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
                            <ul className="">
                                {this.state.playlists.map(playlist => (
                                    <li key={playlist.id}>
                                        <PlaylistIndexItem 
                                            className="playlist-search-item"
                                            playlist={playlist} 
                                            curatorId={playlist.curator_id}/>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : null}

                    {this.state.albums.length > 0 ? (
                        <li className="albums-search-results-container">
                            <h3>Albums</h3>
                            <ul className="">
                                {this.state.albums.map(album => (
                                    <li key={album.id}>
                                        <Link to={`/albums/${album.id}`}>
                                            <img src={album.albumPhoto} alt={`${album.title} photo`} />
                                            <h2 id="album-show-title">{album.title}</h2>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : null}

                    {this.state.tracks.length > 0 ? (
                        <li className="tracks-search-results-container">
                            <h3>Tracks</h3>
                            <ul className="">
                                {this.state.tracks.map(track => (
                                    <li key={track.id}
                                        className="track-item-container">
                
                                        <div className="track-item-icon">
                                            <IoIosMusicalNote id="musical-note-icon" />
                                            <FaPlay id="fa-play-icon" 
                                                // onClick={() => this.handlePlay(track)} 
                                                />
                                        </div>
                                        <div className="track-info-links-container">
                                            <h2
                                                id={this.props.currentTrackId === track.id ? "track-active" : null}
                                            >{track.title}</h2>
                                            <div className="track-info-links">
                                                <Link
                                                    to={`/artists/${track.artist_id}`}
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
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ) : null}
                    
                </ul>
            </>
        )
    }
};

export default Search;