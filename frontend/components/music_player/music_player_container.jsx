import { 
    play, togglePause, nextTrack, previousTrack,
    toggleShuffle, toggleRepeat, saveTrack, unsaveTrack
} from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mapStateToProps = ({ entities, ui, session }, ownProps) => {
    let path = ownProps.history.location.pathname;
    let playlistPhoto = "";
    let albumPhoto = "";
    let currentArtist = "";

    if (path.includes("playlists/")) {
        if (Object.entries(entities.playlists).length === 0) return;
        const playlistId = path.slice(11);
        if (entities.playlists[playlistId] === undefined) return;
        playlistPhoto = entities.playlists[playlistId].playlistPhoto;
    } else if (path.includes("albums/")) {
        if (Object.entries(entities.albums).length === 0) return;
        const albumId = path.slice(8);
        if (entities.albums[albumId] === undefined) return;
        albumPhoto = entities.albums[albumId].albumPhoto;
    } else if (path.includes("collection/tracks") && ui.musicPlayer.currentTrack) {
        const albumId = ui.musicPlayer.currentTrack.album_id;
        if (entities.albums[albumId] === undefined) return;
        albumPhoto = entities.albums[albumId].albumPhoto;
    } 
        
    if (ui.musicPlayer.currentTrack) {
        const albumId = ui.musicPlayer.currentTrack.album_id;
        if (entities.albums[albumId] === undefined) return;
        const artistId = entities.albums[albumId].artist_id;
        currentArtist = entities.artists[artistId];
    }

    return ({
        currentUser: entities.users[session.id],
        currentTrack: ui.musicPlayer.currentTrack,
        currentArtist: currentArtist,
        playlistPhoto: playlistPhoto,
        albumPhoto: albumPhoto,
        playing: ui.musicPlayer.playing,
        paused: ui.musicPlayer.paused,
        queue: ui.musicPlayer.queue,
        previousTracks: ui.musicPlayer.previousTracks,
        shuffledQueue: ui.musicPlayer.shuffledQueue,
        repeat: ui.musicPlayer.repeat,
        shuffle: ui.musicPlayer.shuffle
    });
};

const mapDisptachToProps = dispatch => ({
    play: (track) => dispatch(play(track)),
    togglePause: () => dispatch(togglePause()),
    nextTrack: () => dispatch(nextTrack()),
    previousTrack: () => dispatch(previousTrack()),
    toggleShuffle: () => dispatch(toggleShuffle()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    // saveTrack: id => dispatch(saveTrack(id)),
    // unsaveTrack: id => dispatch(unsaveTrack(id))
});

export default connect(mapStateToProps, mapDisptachToProps)(MusicPlayer);