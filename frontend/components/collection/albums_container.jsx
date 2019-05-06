import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    albums: state.entities.albums
});


const mapDisptachToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: () => dispatch(fetchAlbum())
});

export default connect(mapStateToProps, mapDisptachToProps)(AlbumsIndex);