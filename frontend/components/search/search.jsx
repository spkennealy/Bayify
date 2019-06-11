import React from 'react';
import { searchAll } from '../../actions/search_actions';
import ArtistIndexItem from '../collection/artist_index_item';

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

                    <li className="albums-search-results-container">
                        <ul>

                        </ul>
                    </li>
                    <li className="playlists-search-results-container">
                        <ul>

                        </ul>
                    </li>
                    <li className="tracks-search-results-container">
                        <ul>

                        </ul>
                    </li>
                </ul>
            </>
        )
    }
};

export default Search;