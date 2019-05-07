import React from 'react';
// import { Link } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';

export default class TrackDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderDropDown: false
        };

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.handleAddToPlaylist = this.handleAddToPlaylist.bind(this);
    }

    handleAddToPlaylist() {
        this.toggleDropDown();
        this.props.openModal("addPlaylistTrack");
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
                            onClick={this.handleAddToPlaylist}
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