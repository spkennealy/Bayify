import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            artists: [],
            playlists: [],
            albums: [],
            tracks: [],
        };

        this.handleSearchInput = this.handleSearchInput.bind(this);
        // this.search = this.search.bind(this);
    }

    handleSearchInput(e) {
        this.setState({
            search: e.target.value
        }, () => {
            // this.search();
        });
    }

    search() {
        let artists = [];
        let playlists = [];
        let albums = [];
        let tracks = [];

        this.props.fetchArtistByName(this.state.search)
            .then(res => this.setState({
                artists: Object.values(res)
            }))
            .then(res => console.log(this.state));

        // if (this.state.search.length > 0) {
        //     artists = Object.values(this.props.fetchArtistByName(this.state.search));
        //     playlists = Object.values((this.props.fetchPlaylistByTitle(this.state.search)).playlists);
        //     albums = Object.values((this.props.fetchAlbumByTitle(this.state.search)).albums);
        //     tracks = Object.values((this.props.fetchTrackByTitle(this.state.search)).tracks);
        // }

        // this.setState({
        //     artists,
        //     playlists,
        //     albums,
        //     tracks
        // });

        // console.log(this.state);
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
                            <ul>
                                {this.state.artsis.map(artist => (
                                    <li key={artist}>

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