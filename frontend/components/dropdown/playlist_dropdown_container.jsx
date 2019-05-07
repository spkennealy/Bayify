import { connect } from 'react-redux';
import PlaylistDropdown from './playlist_dropdown';
import { deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    playlistId: ownProps.playlistId
});


const mapDisptachToProps = dispatch => ({
    deletePlaylist: (playlistTrack) => dispatch(deletePlaylist(playlistTrack))
});

export default connect(mapStateToProps, mapDisptachToProps)(PlaylistDropdown);

