import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchTracks } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import { play, setQueue } from '../../actions/music_player_actions';

const mapStateToProps = ({ entities, session, ui }, ownProps) => {
    let currentTrackId = null;

    if (ui.musicPlayer.currentTrack) {
        currentTrackId = ui.musicPlayer.currentTrack.id;
    }

    let album = entities.albums[ownProps.match.params.albumId];
    let followed = false;
    if (album && album.followed) followed = true;

    return ({
        currentUser: entities.users[session.id],
        album,
        users: entities.users,
        artists: entities.artists,
        tracks: entities.tracks,
        currentTrackId,
        followed
    });
};

const mapDisptachToProps = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchTracks: () => dispatch(fetchTracks()),
    play: (track) => dispatch(play(track)),
    openModal: modal => dispatch(openModal(modal)),
    setQueue: queue => dispatch(setQueue(queue))
});

export default connect(mapStateToProps, mapDisptachToProps)(AlbumShow);