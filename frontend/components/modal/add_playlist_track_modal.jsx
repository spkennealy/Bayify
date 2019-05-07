import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addPlaylistTrack, removePlaylistTrack } from '../../actions/playlist_track_actions';

class AddPlaylistTrack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.modal) {
            return null;
        }

        let playlists;
        if (this.props.playlists) {
            playlists = this.props.playlists.map((playlist, i) => {
                if (playlist.author_id === this.props.currentUser.id) {
                    return (
                        <h1>HI</h1>
                        // <AddSongModal key={`playlist-${i}`} playlist={playlist} />
                    );
                }
            });
        } else {
            playlists = null;
        }

        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div onClick={() => this.props.closeModal()} className="close-x" id='modal-close'>X</div>
                    <h1 id="modal-header">Add to Playlist</h1>
                    <ul className='playlist_add_show'>
                        {playlists}
                    </ul>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    modal: state.ui.modal,
    playlists: Object.values(state.entities.playlists),
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    addPlaylistTrack: (playlistTrack) => dispatch(addPlaylistTrack(playlistTrack)),
    removePlaylistTrack: (id) => dispatch(removePlaylistTrack(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPlaylistTrack));
