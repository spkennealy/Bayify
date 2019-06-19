import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { deletePlaylistTrack } from '../../actions/playlist_track_actions';
import { openModal } from '../../actions/modal_actions';
import { play, setQueue } from '../../actions/music_player_actions';

const mapStateToProps = ({ entities, session, ui }, ownProps) => {
    let currentTrackId = null;

    if (ui.musicPlayer.currentTrack) {
        currentTrackId = ui.musicPlayer.currentTrack.id;
    }
    
    let playlist = entities.playlists[ownProps.match.params.playlistId];
    let followed = false;
    if (playlist && playlist.followed) followed = true;

    return ({
        currentUser: entities.users[session.id],
        playlist,
        users: entities.users,
        albums: entities.albums,
        artists: entities.artists,
        tracks: entities.tracks,
        path: ownProps.location.pathname,
        currentTrackId,
        followed
    });
}

const mapDisptachToProps = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylistTrack: id => dispatch(deletePlaylistTrack(id)),
    openModal: modal => dispatch(openModal(modal)),
    play: track => dispatch(play(track)),
    setQueue: queue => dispatch(setQueue(queue))
});

export default connect(mapStateToProps, mapDisptachToProps)(PlaylistShow);