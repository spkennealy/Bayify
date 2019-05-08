import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';

const PlaylistIndexItem = (props) => {
    // debugger;
    // console.log(props);
    if (!props.users || !props.curatorId) return null;

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
                    <svg className="playlist-index-item-svg" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"><title>PLAY</title></path></svg>
                    </div>
            </Link>

            <Link to={`/playlists/${props.playlist.id}`}>
                <h2>{props.playlist.title}</h2>
            </Link>

            <h3>{props.users[props.curatorId].username}</h3>
        </>
    );
};

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists,
    users: state.entities.users
});


const mapDisptachToProps = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
});

export default connect(mapStateToProps, mapDisptachToProps)(PlaylistIndexItem);