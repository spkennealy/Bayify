import { connect } from 'react-redux';
import TracksIndexItem from './track_index_item';
import { fetchTracks } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { removePlaylistTrack } from '../../actions/playlist_track_actions';
import { play, setQueue } from '../../actions/music_player_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {
    let path = "";

    if (ownProps.path !== undefined) {
        path = ownProps.path;
    }

    return ({
        currentUser: entities.users[session.id],
        albums: entities.albums,
        artists: entities.artists,
        tracks: entities.tracks,
        path: path
    });
};

const mapDisptachToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    removePlaylistTrack: (playlistId, trackId) => dispatch(removePlaylistTrack(playlistId, trackId)),
    openModal: (modal) => dispatch(openModal(modal)),
    play: (id) => dispatch(play(id)),
    setQueue: (queue) => dispatch(setQueue(queue))
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndexItem);