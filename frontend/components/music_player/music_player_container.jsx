import { 
    play, togglePause, nextTrack, previousTrack,
    toggleShuffle, toggleRepeat, saveTrack, unsaveTrack, setQueue
} from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities, ui, session }, ownProps) => {
    let albumPhoto = "";
    let currentArtist = "";
        
    if (ui.musicPlayer.currentTrack) {
        const albumId = ui.musicPlayer.currentTrack.album_id;
        if (entities.albums[albumId] !== undefined) {
            const artistId = entities.albums[albumId].artist_id;
            currentArtist = entities.artists[artistId];
            albumPhoto = ui.musicPlayer.currentTrack.albumPhoto;
        }
    }

    return {
        currentUser: entities.users[session.id],
        currentTrack: ui.musicPlayer.currentTrack,
        tracks: entities.tracks,
        currentArtist: currentArtist,
        albumPhoto: albumPhoto,
        playing: ui.musicPlayer.playing,
        paused: ui.musicPlayer.paused,
        queue: ui.musicPlayer.queue,
        previousTracks: ui.musicPlayer.previousTracks,
        shuffledQueue: ui.musicPlayer.shuffledQueue,
        repeat: ui.musicPlayer.repeat,
        shuffle: ui.musicPlayer.shuffle
    };
};

const mapDisptachToProps = dispatch => ({
    play: (track) => dispatch(play(track)),
    togglePause: () => dispatch(togglePause()),
    nextTrack: () => dispatch(nextTrack()),
    previousTrack: () => dispatch(previousTrack()),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    setQueue: (queue) => dispatch(setQueue(queue))
    // saveTrack: id => dispatch(saveTrack(id)),
    // unsaveTrack: id => dispatch(unsaveTrack(id))
});

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(MusicPlayer));