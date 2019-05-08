import React from 'react';
import AlbumIndexItem from './album_index_item';

export default class AlbumsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        if (Object.entries(this.props.albums).length === 0) return null;
        if (Object.entries(this.props.artists).length === 0) return null;
        
        const albums = Object.values(this.props.albums);

        return (
            <div className="album-index-container">
                <ul className="album-index">
                    {albums.map(album => (
                        <li key={album.id}>
                            <AlbumIndexItem
                                album={album} 
                                artists={this.props.artists}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

