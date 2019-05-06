import React from 'react';
import { Link } from 'react-router-dom';

export default class AlbumsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        if (!this.props.albums) return null;
        const albums = Object.values(this.props.albums);

        return (
            <div className="album-index-container">
                <ul className="album-index">
                    {albums.map(album => (
                        <li key={album.id}>
                            <AlbumIndexItem
                                album={album} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const AlbumIndexItem = (props) => {
    return (
        <>
            <Link to={`/albums/${props.album.id}`}>
                <img src={props.album.albumPhoto} alt={`${props.album.title} photo`} />
                <h2>{props.album.title}</h2>
            </Link>

            <Link to={`/artist/${props.album.artist.id}`}>
                <h3>{props.album.artist.name}</h3>
            </Link>

        </>
    )
};
