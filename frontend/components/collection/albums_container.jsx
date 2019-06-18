import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { fetchFollowedAlbums, fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    albums: entities.albums,
    artists: entities.artists
});


const mapDisptachToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchFollowedAlbums()),
    fetchAlbum: () => dispatch(fetchAlbum())
});

export default connect(mapStateToProps, mapDisptachToProps)(AlbumsIndex);