import React from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';
import { Link } from 'react-router-dom';

export default class NewReleases extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchNewReleaseAlbums()
            .then(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playlists.length !== this.props.playlists.length) {
            this.props.fetchNewReleaseAlbums()
                .then(() => this.setState({ loading: false }));
        }
    }

    render() {
        if (Object.entries(this.props.albums).length === 0) return null;
        const albums = Object.values(this.props.albums);

        return (
            <>
                <section className="featured-album-container">
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