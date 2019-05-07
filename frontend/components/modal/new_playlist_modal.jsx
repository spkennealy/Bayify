import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import { MdClear } from 'react-icons/fa';
import { createPlaylist } from '../../actions/playlist_actions';

class NewPlaylistModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: "",
        };

        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.submitPlaylist = this.submitPlaylist.bind(this);
    }

    handleInput(e) {
        this.setState({
            playlistName: e.target.value
        });
    }

    handleCloseClick(e) {
        e.stopPropagation();
        this.setState({ playlistName: "" });
        this.props.closeModal();
    }

    submitPlaylist(e) {
        if (this.state.playlistName.length > 0) {
            e.stopPropagation();
            this.props.createPlaylist({
                title: this.state.playlistName,
                curator_id: this.props.currentUser.id
            });
            this.setState({ playlistName: "" });
            this.props.closeModal();
        }
    }

    render() {
        if (this.props.modal === false) {
            return null;
        }

        return (
            <div className="modal-background">
                <div className="playlist-form-modal modal-child">
                    <button 
                        className="playlist-form-close-button" 
                        onClick={this.handleCloseClick}>
                        <svg width="32" height="32" viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Close</title><path d="M31.098 29.794L16.955 
                            15.65 31.097 1.51 29.683.093 15.54 14.237 
                            1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 
                            1.414L15.54 17.065l14.144 14.143" fill="#fff" 
                            fillRule="evenodd"></path>
                        </svg>
                    </button>    
                        <h1 className="playlist-form-header">Create new playlist</h1>
                        <div className="modal-input-container">
                            <div className="modal-input-sub-container">
                                <h4>Playlist Name</h4>
                                <input 
                                    type="text"
                                    placeholder="Start typing..."
                                    onChange={this.handleInput}/>
                            </div>
                        </div>
                    <div className="modal-buttons">
                        <button 
                            className="cancel-button"
                            onClick={this.handleCloseClick}
                            >Cancel</button>
                        <button 
                            className="modal-create-playlist-button"
                            onClick={this.submitPlaylist}
                            >Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistModal);