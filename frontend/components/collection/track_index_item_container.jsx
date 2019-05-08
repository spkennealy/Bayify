import { connect } from 'react-redux';
import TracksIndexItem from './track_index_item';
import { fetchTracks } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = ({ entities, session }) => {
    // debugger;
    return ({
        currentUser: entities.users[session.id],
        albums: entities.albums,
        artists: entities.artists
    });
};

const mapDisptachToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDisptachToProps)(TracksIndexItem);