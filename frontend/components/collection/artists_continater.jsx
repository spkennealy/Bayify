import { fetchArtist, fetchFollowedArtists } from '../../actions/artist_actions';
import { connect } from 'react-redux';
import ArtistsIndex from './artists_index';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    artists: state.entities.artists
});

const mapDisptachToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchFollowedArtists()),
    fetchArtist: () => dispatch(fetchArtist())
});

export default connect(mapStateToProps, mapDisptachToProps)(ArtistsIndex);