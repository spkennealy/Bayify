import { connect } from 'react-redux';
import TrackDropdown from './track_dropdown';
import { addPlaylistTrack } from '../../actions/playlist_track_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        trackId: ownProps.trackId
    };
};


const mapDisptachToProps = dispatch => ({
    addPlaylistTrack: (playlistTrack) => dispatch(addPlaylistTrack(playlistTrack)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(TrackDropdown);