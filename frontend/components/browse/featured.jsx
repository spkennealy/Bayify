import React from 'react';
import PlaylistIndexItem from '../collection/playlist_index_item';
    // Pass: playlist, curatorId, username
import ArtistIndexItem from '../collection/artist_index_item';
    // Pass: artist
import { ImpulseSpinner } from 'react-spinners-kit';
import { Link } from 'react-router-dom';

export default class Featured extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchFeaturedPlaylists()
            .then(() => this.props.fetchFeaturedArtists())
            .then(() => this.props.fetchFeaturedAlbums())
            .then(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.playlists.length !== this.props.playlists.length) ||
            (prevProps.artists.lenth !== this.props.artists.length) ||
            (prevProps.albums.length !== this.props.albums.length)) {
            this.props.fetchFeaturedPlaylists()
                .then(() => this.props.fetchFeaturedArtists())
                .then(() => this.props.fetchFeaturedAlbums())
                .then(() => this.setState({ loading: false }));
        }
    }

    render() {
        if (Object.entries(this.props.playlists).length === 0) return null;
        if (Object.entries(this.props.artists).length === 0) return null;
        if (Object.entries(this.props.albums).length === 0) return null;
        const playlists = Object.values(this.props.playlists);
        const artists = Object.values(this.props.artists);
        const albums = Object.values(this.props.albums);

        return (
            <>
                <section className="featured-container featured-playlist-container">
                    <h1 className="featured-title">Picked for you</h1>
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

                <section className="featured-container featured-artist-container">
                    <h1 className="featured-title featured-artist-title">Check Out These Artists</h1>
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
                    <h1 className="featured-title featured-ablum-title">Check Out These Albums</h1>
                    <div className="album-index-container">

                        {this.state.loading ?
                            (<div className="loading-container">
                                <ImpulseSpinner size={50} />
                            </div>) :

                            (<ul className="album-index">
                                {albums.map(album => (
                                    <li key={album.id}>
                                        <Link to={`/albums/${album.id}`}>
                                            <img
                                                id="album-index-item-img"
                                                src={album.albumPhoto} />
                                            <h2 id="album-show-title">{album.title}</h2>
                                        </Link>

                                        <Link to={`/artists/${album.artist.id}`}>
                                            <h3 className="album-artist" id="add-font">{album.artist.name}</h3>
                                        </Link>
                                    </li>
                                ))}
                            </ul>)}
                    </div>
                </section>
            </>
        );
    }
}