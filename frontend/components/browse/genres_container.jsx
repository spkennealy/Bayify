import { connect } from 'react-redux';
import { fetchGenresPlaylists } from '../../actions/playlist_actions';
import Genres from './genres';

const mapStateToProps = ({ entities }) => {
    return {
        albums: entities.albums,
        playlists: entities.playlists,
        artists: entities.artists,
        username: Object.values(entities.users)[0].username
    };
};

const mapDisptachToProps = dispatch => ({
    fetchGenresPlaylists: () => dispatch(fetchGenresPlaylists()),
});

export default connect(mapStateToProps, mapDisptachToProps)(Genres);