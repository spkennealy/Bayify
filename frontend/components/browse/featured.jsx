import { connect } from 'react-redux';
import {  } from '../../actions/playlist_actions';
import { } from '../../actions/album_actions';
import { } from '../../actions/artist_actions';

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    playlists: entities.playlists,
    albums: entities.albums,
    artists: entities.artists
});


const mapDisptachToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchAlbum: () => dispatch(fetchAlbum())
});

export default connect(mapStateToProps, mapDisptachToProps)(AlbumsIndex);