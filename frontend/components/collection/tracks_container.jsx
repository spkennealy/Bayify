import { connect } from 'react-redux';
import TracksIndex from './tracks_index';
import { fetchFollowedTracks } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let currentTrackId = null;

    if (state.ui.musicPlayer.currentTrack) {
        currentTrackId = state.ui.musicPlayer.currentTrack.id;
    }

    return ({
        currentUser: state.entities.users[state.session.id],
        tracks: state.entities.tracks,
        path: ownProps.location.pathname,
        currentTrackId
    });
}

const mapDisptachToProps = dispatch => ({
    fetchFollowedTracks: () => dispatch(fetchFollowedTracks()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndex);