import { connect } from 'react-redux';
import { 
    fetchChartsPlaylists, fetchChartsHipHop, 
    fetchChartsPop, fetchChartsRock
} from '../../actions/playlist_actions';
import Charts from './featured';

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
    fetchChartsHipHop: () => dispatch(fetchChartsHipHop()),
    fetchChartsRock: () => dispatch(fetchChartsRock()),
    fetchChartsPop: () => dispatch(fetchChartsPop())
});

export default connect(mapStateToProps, mapDisptachToProps)(Charts);