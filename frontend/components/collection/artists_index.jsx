import React from 'react';
import ArtistIndexItem from './artist_index_item';
import { ImpulseSpinner } from 'react-spinners-kit';

export default class ArtistsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchArtists()
            .then(() => this.setState({ loading: false }));
    }

    render() {
        if (!this.props.artists) return null;
        const artists = Object.values(this.props.artists);

        return (
            
            <div className="artist-index-container">
                {this.state.loading ?
                    (<div className="loading-container">
                        <ImpulseSpinner size={50}/>
                    </div>) : 
                
                (<ul className="artist-index">
                    {artists.map(artist => (
                        <li key={artist.id}>
                            <ArtistIndexItem
                                artist={artist} />
                        </li>
                    ))}
                </ul>)}
            </div>
        );
    }
}