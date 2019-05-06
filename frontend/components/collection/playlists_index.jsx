import React from 'react';
import { Link } from 'react-router-dom';

export default class PlaylistsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchPlaylists();
    }
    
    render() {
        if (!this.props.playlists) return null;
        const playlists = Object.values(this.props.playlists);

        return (
            <div className="playlist-index-container">
                <ul className="playlist-index">
                    {playlists.map(playlist => (
                        <li key= {playlist.id}>
                            <PlaylistIndexItem 
                                playlist={playlist}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const PlaylistIndexItem = (props) => {
    return (
        <>
            <Link to={`/playlists/${props.playlist.id}`}>
                <img src={props.playlist.playlistPhoto} alt={`${props.playlist.title} photo`}/>
            </Link>

            <Link to={`/playlists/${props.playlist.id}`}>
                <h2>{props.playlist.title}</h2>
            </Link>

            <h3>{props.playlist.curator.username}</h3>
        </>
    )
};
