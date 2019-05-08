import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }, ownProps) => ({
    currentUser: entities.users[session.id],
    playlist: entities.playlists[ownProps.match.params.playlistId],
    users: entities.users,
    albums: entities.albums,
    artists: entities.artists,
    tracks: entities.tracks
});

const mapDisptachToProps = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(PlaylistShow);