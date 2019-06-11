import React from 'react';
import { searchAll } from '../../actions/search_actions';
import ArtistIndexItem from '../collection/artist_index_item';
import PlaylistIndexItem from '../collection/playlist_index_item';
import AlbumIndexItem from '../collection/album_index_item';
import TrackIndexItem from '../collection/track_index_item';

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
                                        <PlaylistIndexItem playlist={playlist} />
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
                                        <AlbumIndexItem album={album} />
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
                                    <li key={track.id}>
                                        <TrackIndexItem track={track} />
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