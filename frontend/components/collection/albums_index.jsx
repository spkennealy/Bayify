import React from 'react';
import AlbumIndexItem from './album_index_item';
import { ImpulseSpinner } from 'react-spinners-kit';

export default class AlbumsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchAlbums()
            .then(res => this.setState({ loading: false }));
    }

    render() {
        if (Object.entries(this.props.albums).length === 0) return null;
        if (Object.entries(this.props.artists).length === 0) return null;
        
        const albums = Object.values(this.props.albums);

        return (
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
                                artists={this.props.artists}/>
                        </li>
                    ))}
                </ul>)}
            </div>
        );
    }
}

