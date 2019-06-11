import { connect } from 'react-redux';
import Search from './search';
import {
    fetchPlaylistByTitle, fetchAlbumByTitle, fetchArtistByName,
    fetchTrackByTitle
} from '../../util/search_utils';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDisptachToProps = dispatch => ({
    fetchArtistByName: name => dispatch(fetchArtistByName(name)),
    fetchPlaylistByTitle: title => dispatch(fetchPlaylistByTitle(title)),
    fetchAlbumByTitle: title => dispatch(fetchAlbumByTitle(title)),
    fetchTrackByTitle: title => dispatch(fetchTrackByTitle(title))
});

export default connect(mapStateToProps, mapDisptachToProps)(Search);