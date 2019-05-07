import React from 'react';
// import { Link } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';

export default class PlaylistDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderDropDown: false
        };

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.handleDeletePlaylist = this.handleDeletePlaylist.bind(this);
    }

    handleDeletePlaylist() {
        this.toggleDropDown();
        this.props.deletePlaylist(this.props.playlistId);
    }

    toggleDropDown() {
        this.setState({
            renderDropDown: !this.state.renderDropDown
        });
    }

    render() {
        return (
            <div className="elipsis-dropdown-container">
                <div
                    className="elipsis-icon">
                    <FaEllipsisH
                        onClick={this.toggleDropDown}
                    />
                </div>
                <ul className={`elipsis-dropdown-menu ${
                    this.state.renderDropDown === true ?
                        "elipsis-dropdown-menu-display" : ""
                    }`}>
                    <li>
                        <button
                            onClick={this.handleDeletePlaylist}
                        >
                            Add to Playlist
                        </button>
                    </li>
                    <li>
                        <button>
                            Save Song to Favories
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}