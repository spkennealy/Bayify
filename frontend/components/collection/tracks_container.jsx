import { connect } from 'react-redux';
import TracksIndex from './tracks_index';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    tracks: state.entities.tracks
});


const mapDisptachToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndex);