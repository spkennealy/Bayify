import React from 'react';
import ArtistIndexItem from './artist_index_item';

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