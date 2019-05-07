import React from 'react';
import { Link } from 'react-router-dom';
import TrackDropdownContainer from '../dropdown/track_dropdown_container';

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
                            key={track.id}>
                            <TrackIndexItem
                                track={track} />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export const TrackIndexItem = (props) => {

    const trackTime = (time) => {
        const min = Math.floor(time / 60);
        let sec = time % 60;
        if (sec < 10) sec = `0${sec}`;
        return (
            `${min}:${sec}`
        );
    };

    return (
        <>
            <div 
                className="track-item-container"
                to={`/tracks/${props.track.id}`}>
                <h2>{props.track.title}</h2>
                <div className="track-info-links">
                <Link
                    to={`/artists/${props.track.artist.id}`}>
                    {props.track.artist.name}
                </Link>
                <p>·</p>
                <Link
                    to={`/albums/${props.track.album.id}`}>
                    {props.track.album.title}
                </Link>
                </div>
            </div>
            <div>
                <TrackDropdownContainer trackId={props.track.id}/>
            </div>
            <div className="track-length">
                <h2>{trackTime(props.track.track_length)}</h2>
            </div>
        </>
    );
};
