import { 
    play, pause, setCurrentTrack, nextTrack, previousTrack,
    toggleShuffle, toggleRepeat, saveTrack, unsaveTrack
} from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
    // TODO: add more props
    // currentTrack: state.entities.tracks[state.ui.currentTrackId]
});

const mapDisptachToProps = dispatch => ({
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    setCurrentTrack: id => dispatch(setCurrentTrack(id)),
    nextTrack: () => dispatch(nextTrack()),
    previousTrack: () => dispatch(previousTrack()),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    saveTrack: id => dispatch(saveTrack(id)),
    unsaveTrack: id => dispatch(unsaveTrack(id))
});

export default connect(mapStateToProps, mapDisptachToProps)(MusicPlayer);