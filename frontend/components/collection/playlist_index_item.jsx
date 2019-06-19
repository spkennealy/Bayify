import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { play, setQueue } from '../../actions/music_player_actions';

const PlaylistIndexItem = (props) => {
    if (!props.users || !props.curatorId) return null;

    const playPlaylist = () => {
        const tracks = [];
        const trackIds = props.playlist.track_ids;
        if (trackIds.length === 0) return null;
        trackIds.forEach(trackId => {
            tracks.push(props.tracks[trackId]);
        });
        props.play(tracks.shift());
        props.setQueue(tracks);
    };

    return (
        <>
            <Link
                className="playlist-index-item"
                to={`/playlists/${props.playlist.id}`}>
                <div className="playlist-item-svg-container">
                    <img
                        className="playlist-index-item-img"
                        src={props.playlist.playlistPhoto}
                        alt={`${props.playlist.title} photo`} />
                    <svg 
                        onClick={playPlaylist}
                        className="playlist-index-item-svg" viewBox="0 0 85 100">
                        <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 
                        98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                        <title>PLAY</title></path>
                    </svg>
                </div>
            </Link>

            <Link to={`/playlists/${props.playlist.id}`}>
                <h2 id="add-font">{props.playlist.title}</h2>
            </Link>

            <h3 id="add-font">{props.username}</h3>
        </>
    );
};

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists,
    users: state.entities.users,
    tracks: state.entities.tracks
});


const mapDisptachToProps = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    play: track => dispatch(play(track)),
    setQueue: queue => dispatch(setQueue(queue))
});

export default connect(mapStateToProps, mapDisptachToProps)(PlaylistIndexItem);