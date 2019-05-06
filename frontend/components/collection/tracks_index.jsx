import React from 'react';
import { Link } from 'react-router-dom';

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
                        <li key={track.id}>
                            <TrackIndexItem
                                track={track} />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

const TrackIndexItem = (props) => {
    return (
        <>
            <Link to={`/tracks/${props.track.id}`}>
                <img src={props.track.trackPhoto} alt={`${props.track.title} photo`} />
            </Link>

            <Link to={`/tracks/${props.track.id}`}>
                <h2>{props.track.title}</h2>
            </Link>
        </>
    )
};
