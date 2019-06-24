import { connect } from 'react-redux';
import { fetchChartsPlaylists } from '../../actions/playlist_actions';
import Charts from './charts';

const mapStateToProps = ({ entities }) => {
    return {
        albums: entities.albums,
        playlists: entities.playlists,
        artists: entities.artists,
        username: Object.values(entities.users)[0].username
    };
};

const mapDisptachToProps = dispatch => ({
    fetchChartsPlaylists: () => dispatch(fetchChartsPlaylists()),
});

export default connect(mapStateToProps, mapDisptachToProps)(Charts);