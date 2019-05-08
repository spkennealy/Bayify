import { connect } from 'react-redux';
import TracksIndexItem from './track_index_item';
import { fetchTracks } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { removePlaylistTrack } from '../../actions/playlist_track_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {
    // debugger;
    return ({
        currentUser: entities.users[session.id],
        albums: entities.albums,
        artists: entities.artists,
        // playlistId: ownProps.match.params.playlistId
    });
};

const mapDisptachToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    removePlaylistTrack: (playlistTrack) => dispatch(removePlaylistTrack(playlistTrack)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndexItem);