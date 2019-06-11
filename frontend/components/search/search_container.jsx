import { connect } from 'react-redux';
import Search from './search';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {

    let currentTrackId = null;
    if (state.ui.musicPlayer.currentTrack) {
        currentTrackId = state.ui.musicPlayer.currentTrack.id;
    }

    return ({
        currentUser: state.entities.users[state.session.id],
        currentTrackId
    });
};

const mapDisptachToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(Search);