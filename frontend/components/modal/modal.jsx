import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { MdClear } from 'react-icons/fa';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handlePlaylistClick = this.handlePlaylistClick.bind(this);
    }

    handleCloseClick(e) {
        e.stopPropagation();
        this.props.closeModal();
    }

    handlePlaylistClick(playlist) {
        return e => {
            e.stopPropagation();
            this.props.createPlaylistSong(playlist.id, this.props.clickedSongId.id);
            this.props.closeModal();
        };
    }

    render() {
        if (this.props.modal === false) {
            return null;
        }

        return (
            <div className="modal-background">
                <div className="modal-child">
                    <h1>"I'm the modal"</h1>
                    {/* <button onClick={closeModal}><MdClear /></button> */}
                    {/* <NewPlaylistContainer /> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);