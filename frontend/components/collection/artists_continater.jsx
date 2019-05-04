import { fetchArtist, fetchArtists } from '../../actions/artist_actions';
import { connect } from 'react-redux';
import Artists from './artists';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDisptachToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: () => dispatch(fetchArtist()),
    // createPlaylist: () => dispatch(createPlaylist())
});

export default connect(mapStateToProps, mapDisptachToProps)(Artists);