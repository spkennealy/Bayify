import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { openModal } from '../../actions/modal_actions';
import { play, setQueue } from '../../actions/music_player_actions';

const mapStateToProps = ({ entities, session }, ownProps) => ({
    currentUser: entities.users[session.id],
    artist: entities.artists[ownProps.match.params.artistId],
    albums: entities.albums,
    tracks: entities.tracks
});

const mapDisptachToProps = dispatch => ({
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    openModal: modal => dispatch(openModal(modal)),
    play: (track) => dispatch(play(track)),
    setQueue: queue => dispatch(setQueue(queue))
});

export default connect(mapStateToProps, mapDisptachToProps)(ArtistShow);