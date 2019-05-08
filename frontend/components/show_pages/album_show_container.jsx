import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchTracks } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }, ownProps) => ({
    currentUser: entities.users[session.id],
    album: entities.albums[ownProps.match.params.albumId],
    users: entities.users,
    artists: entities.artists,
    tracks: entities.tracks
});

const mapDisptachToProps = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchTracks: () => dispatch(fetchTracks()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(AlbumShow);