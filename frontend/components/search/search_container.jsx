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
    fetchPlaylistByTitle: title => dispatch(fetchPlaylistByTitle(title)),
    fetchAlbumByTitle: title => dispatch(fetchAlbumByTitle(title)),
    fetchArtistByName: name => dispatch(fetchArtistByName(name)),
    fetchTrackByTitle: title => dispatch(fetchTrackByTitle(title))
});

export default connect(mapStateToProps, mapDisptachToProps)(Search);