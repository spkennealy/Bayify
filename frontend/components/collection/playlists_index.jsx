import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { ImpulseSpinner } from 'react-spinners-kit';

export default class PlaylistsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }
    
    componentDidMount() {
        this.props.fetchPlaylists()
            .then(res => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playlists.length !== this.props.playlists.length) {
            this.props.fetchPlaylists()
                .then(res => this.setState({ loading: false }));
        }
    }
    
    render() {
        if (Object.entries(this.props.playlists).length === 0) return null;
        const playlists = Object.values(this.props.playlists);

        return (
            <div className="playlist-index-container">
                
                {this.state.loading ?
                    (<div className="loading-container">
                        <ImpulseSpinner size={50} />
                    </div>) : 

                (<ul className="playlist-index">
                    {playlists.map(playlist => (
                        <li key= {playlist.id}>
                            <PlaylistIndexItem 
                                playlist={playlist}
                                curatorId={playlist.curator_id}
                                username={playlist.username}/>
                        </li>
                    ))}
                </ul>)}
            </div>
        );
    }
}
