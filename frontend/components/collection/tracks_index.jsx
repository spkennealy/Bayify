import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexItemContainer from './track_index_item_container';

export default class TracksIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        if (!this.props.tracks) return null;
        const tracks = Object.values(this.props.tracks);

        return (
            <div className="track-index-container">
                <ol className="track-index">
                    {tracks.map(track => (
                        <li 
                            className="track-list-item"
                            id={this.props.currentTrackId === track.id ? "track-container-active" : null}
                            key={track.id}>
                            <TrackIndexItemContainer
                                track={track} 
                                openModal={this.props.openModal}/>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

