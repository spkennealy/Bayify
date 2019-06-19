import React from 'react';
import TrackIndexItemContainer from './track_index_item_container';
import { ImpulseSpinner } from 'react-spinners-kit';

export default class TracksIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchFollowedTracks()
            .then(res => this.setState({ loading: false }));
    }

    render() {
        if (!this.props.tracks) return null;
        const tracks = Object.values(this.props.tracks);

        return (
            <div className="track-index-container">

                {this.state.loading ?
                    (<div className="loading-container">
                        <ImpulseSpinner size={50} />
                    </div>) : 
                
                (<ol className="track-index">
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
                </ol>)}
            </div>
        );
    }
}

