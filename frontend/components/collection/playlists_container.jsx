import { connect } from 'react-redux';
import PlaylistIndex from './playlists_index';
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists
});


const mapDisptachToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
});

export default connect(mapStateToProps, mapDisptachToProps)(PlaylistIndex);