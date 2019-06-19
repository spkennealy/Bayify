import React from 'react';
import PlaylistIndexItem from '../collection/playlist_index_item';
    // Pass: playlist, curatorId, username
import AlbumIndexItem from '../collection/playlist_index_item';
    // Pass: album, artists
import ArtistIndexItem from '../collection/artist_index_item';
    // Pass: artist
import { ImpulseSpinner } from 'react-spinners-kit';

export default class FeaturedIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchFeaturedPlaylists()
            // .then(() => this.props.fetchFeaturedArtists())
            // .then(() => this.props.fetchFeaturedAlbums())
            .then(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.playlists.length !== this.props.playlists.length) ||
            (prevProps.artists.lenth !== this.props.artists.length) ||
            (prevProps.albums.length !== this.props.albums.length)) {
            this.props.fetchFeaturedPlaylists()
                // .then(() => this.props.fetchFeaturedArtists())
                // .then(() => this.props.fetchFeaturedAlbums())
                .then(() => this.setState({ loading: false }));
        }
    }

    render() {
        if (Object.entries(this.props.playlists).length === 0) return null;
        // if (Object.entries(this.props.artists).length === 0) return null;
        // if (Object.entries(this.props.albums).length === 0) return null;
        const playlists = Object.values(this.props.playlists);
        // const artists = Object.values(this.props.artists);
        // const albums = Object.values(this.props.albums);

        // debugger;

        return (
            <>
                <section className="featured-playlist-container">
                    <h1 className="featured-playlist-title">Picked for {this.props.username}</h1>
                    <div className="playlist-index-container">

                        {this.state.loading ?
                            (<div className="loading-container">
                                <ImpulseSpinner size={50} />
                            </div>) :

                            (<ul className="playlist-index">
                                {playlists.map(playlist => (
                                    <li key={playlist.id}>
                                        <PlaylistIndexItem
                                            playlist={playlist}
                                            curatorId={playlist.curator_id}
                                            username={playlist.username} />
                                    </li>
                                ))}
                            </ul>)}
                    </div>
                </section>

                {/* <section className="featured-artist-container">
                    <h1 className="featured-artist-title">Check Out These Artists</h1>
                    <div className="artist-index-container">
                        {this.state.loading ?
                            (<div className="loading-container">
                                <ImpulseSpinner size={50} />
                            </div>) :

                            (<ul className="artist-index">
                                {artists.map(artist => (
                                    <li key={artist.id}>
                                        <ArtistIndexItem
                                            artist={artist} />
                                    </li>
                                ))}
                            </ul>)}
                    </div>
                </section>

                <section className="featured-album-container">
                    <h1 className="featured-album-title">Hot Albums</h1>
                    <div className="album-index-container">

                        {this.state.loading ?
                            (<div className="loading-container">
                                <ImpulseSpinner size={50} />
                            </div>) :

                            (<ul className="album-index">
                                {albums.map(album => (
                                    <li key={album.id}>
                                        <AlbumIndexItem
                                            album={album}
                                            artists={this.props.artists} />
                                    </li>
                                ))}
                            </ul>)}
                    </div>
                </section> */}
            </>
        );
    }
}