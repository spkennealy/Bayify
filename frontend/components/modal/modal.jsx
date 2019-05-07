import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewPlaylistModal from './new_playlist_modal';
import AddPlaylistTrackModal from './add_playlist_track_modal';

const Modal = (props) => {
    if (!props.modal) {
        return null;
    }

    let component;
    switch (props.modal.modalType) {
        case "createPlaylist":
            component = <NewPlaylistModal />;
            break;
        case "addPlaylistTrack":
            component = <AddPlaylistTrackModal />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);