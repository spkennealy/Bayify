import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItem from './playlist_index_item';

export default class PlaylistsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchPlaylists();
    }
    
    render() {
        if (Object.entries(this.props.playlists).length === 0) return null;
        const playlists = Object.values(this.props.playlists);

        return (
            <div className="playlist-index-container">
                <ul className="playlist-index">
                    {playlists.map(playlist => (
                        <li key= {playlist.id}>
                            <PlaylistIndexItem 
                                playlist={playlist}
                                curatorId={playlist.curator_id}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
