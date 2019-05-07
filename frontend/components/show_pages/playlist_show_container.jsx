import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    users: state.entities.users
});

const mapDisptachToProps = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
});

export default connect(mapStateToProps, mapDisptachToProps)(PlaylistShow);