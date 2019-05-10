import { connect } from 'react-redux';
import TracksIndex from './tracks_index';
import { fetchTracks } from '../../actions/track_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        tracks: state.entities.tracks,
        path: ownProps.location.pathname
    });
}

const mapDisptachToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndex);