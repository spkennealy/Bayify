import { connect } from 'react-redux';
import { fetchNewReleaseAlbums } from '../../actions/album_actions';
import NewReleases from './new_releases';

const mapStateToProps = ({ entities }) => {
    return {
        albums: entities.albums,
        playlists: entities.playlists,
        artists: entities.artists,
        username: Object.values(entities.users)[0].username
    };
};

const mapDisptachToProps = dispatch => ({
    fetchNewReleaseAlbums: () => dispatch(fetchNewReleaseAlbums()),
});

export default connect(mapStateToProps, mapDisptachToProps)(NewReleases);