import { 
    play, pause, setCurrentTrack, nextTrack, previousTrack,
    toggleShuffle, toggleRepeat, saveTrack, unsaveTrack
} from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mapStateToProps = ({ entities, ui, session }) => ({
    currentUser: entities.users[session.id],
    currentTrack: entities.tracks[ui.musicPlayer.currentTrackId],
    playing: ui.musicPlayer.playing,
    queue: ui.musicPlayer.queue,
    repeat: ui.musicPlayer.repeat,
    shuffle: ui.musicPlayer.shuffle
});

const mapDisptachToProps = dispatch => ({
    play: (id) => dispatch(play(id)),
    pause: () => dispatch(pause()),
    nextTrack: () => dispatch(nextTrack()),
    previousTrack: () => dispatch(previousTrack()),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    saveTrack: id => dispatch(saveTrack(id)),
    unsaveTrack: id => dispatch(unsaveTrack(id))
});

export default connect(mapStateToProps, mapDisptachToProps)(MusicPlayer);