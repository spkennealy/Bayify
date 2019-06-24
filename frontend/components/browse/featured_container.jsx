import { connect } from 'react-redux';
import { fetchFeaturedPlaylists } from '../../actions/playlist_actions';
import { fetchFeaturedAlbums } from '../../actions/album_actions';
import { fetchFeaturedArtists } from '../../actions/artist_actions';
import Featured from './featured';

const mapStateToProps = ({ entities }) => {
    return {
        albums: entities.albums,
        playlists: entities.playlists,
        artists: entities.artists,
        username: Object.values(entities.users)[0].username
    };
};


const mapDisptachToProps = dispatch => ({
    fetchFeaturedAlbums: () => dispatch(fetchFeaturedAlbums()),
    fetchFeaturedArtists: () => dispatch(fetchFeaturedArtists()),
    fetchFeaturedPlaylists: () => dispatch(fetchFeaturedPlaylists())
});

export default connect(mapStateToProps, mapDisptachToProps)(Featured);