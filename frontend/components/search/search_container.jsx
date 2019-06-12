import { connect } from 'react-redux';
import Search from './search';
import { openModal } from '../../actions/modal_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { play } from '../../actions/music_player_actions';

const mapStateToProps = state => {

    let currentTrackId = null;
    if (state.ui.musicPlayer.currentTrack) {
        currentTrackId = state.ui.musicPlayer.currentTrack.id;
    }

    return ({
        currentUser: state.entities.users[state.session.id],
        currentTrackId
    });
};

const mapDisptachToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    play: (track) => dispatch(play(track))
});

export default connect(mapStateToProps, mapDisptachToProps)(Search);