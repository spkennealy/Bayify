import { 
    play, pause, setCurrentTrack, nextTrack, previousTrack,
    toggleShuffle, toggleRepeat, saveTrack, unsaveTrack
} from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mapStateToProps = ({ entities, ui, session }) => {
    // debugger;
    return ({
        currentUser: entities.users[session.id],
        currentTrack: ui.musicPlayer.currentTrack,
        playing: ui.musicPlayer.playing,
        queue: ui.musicPlayer.queue,
        repeat: ui.musicPlayer.repeat,
        shuffle: ui.musicPlayer.shuffle
    });
};

const mapDisptachToProps = dispatch => ({
    play: (track) => dispatch(play(track)),
    pause: () => dispatch(pause()),
    nextTrack: () => dispatch(nextTrack()),
    previousTrack: () => dispatch(previousTrack()),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    saveTrack: id => dispatch(saveTrack(id)),
    unsaveTrack: id => dispatch(unsaveTrack(id))
});

export default connect(mapStateToProps, mapDisptachToProps)(MusicPlayer);