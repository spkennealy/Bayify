import { connect } from 'react-redux';
import TracksIndexItem from './track_index_item';
import { fetchTracks, followTrack, unfollowTrack } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { removePlaylistTrack } from '../../actions/playlist_track_actions';
import { play, setQueue } from '../../actions/music_player_actions';

const mapStateToProps = ({ entities, session, ui }, ownProps) => {
    let path = "";
    let currentTrackId = null;

    if (ownProps.path !== undefined) {
        path = ownProps.path;
    }

    if (ui.musicPlayer.currentTrack) currentTrackId = ui.musicPlayer.currentTrack.id;

    return ({
        currentUser: entities.users[session.id],
        currentTrackId,
        albums: entities.albums,
        artists: entities.artists,
        tracks: entities.tracks,
        playlists: entities.playlists,
        path: path
    });
};

const mapDisptachToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    removePlaylistTrack: (playlistTrackId, trackId, playlistId) => dispatch(removePlaylistTrack(playlistTrackId, trackId, playlistId)),
    openModal: (modal) => dispatch(openModal(modal)),
    play: (id) => dispatch(play(id)),
    setQueue: (queue) => dispatch(setQueue(queue)),
    followTrack: (userId, trackId) => dispatch(followTrack(userId, trackId)),
    unfollowTrack: (userId, trackId) => dispatch(unfollowTrack(userId, trackId))
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndexItem);