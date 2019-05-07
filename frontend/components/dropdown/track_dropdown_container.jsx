import { connect } from 'react-redux';
import TrackDropdown from './track_dropdown';
import { addPlaylistTrack } from '../../actions/playlist_track_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});


const mapDisptachToProps = dispatch => ({
    addPlaylistTrack: (playlistTrack) => dispatch(addPlaylistTrack(playlistTrack)),
    openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDisptachToProps)(TrackDropdown);