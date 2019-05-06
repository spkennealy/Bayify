import React from 'react';
import { Link } from 'react-router-dom';

export default class ArtistsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        if (!this.props.artists) return null;
        const artists = Object.values(this.props.artists);

        return (
            <div className="artist-index-container">
                <ul className="artist-index">
                    {artists.map(artist => (
                        <li key={artist.id}>
                            <ArtistIndexItem
                                artist={artist} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const ArtistIndexItem = (props) => {
    return (
        <>
            <Link to={`/artists/${props.artist.id}`}>
                <img src={props.artist.artistPhoto} alt={`${props.artist.title} photo`} />
            </Link>

            <Link to={`/artists/${props.artist.id}`}>
                <h2>{props.artist.name}</h2>
            </Link>
        </>
    )
};
