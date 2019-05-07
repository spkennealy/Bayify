import { connect } from 'react-redux';
import TracksIndexItem from './tracks_index';
import { fetchTracks } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    albums: entities.albums,
    artsits: entities.artists
});


const mapDisptachToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndexItem);