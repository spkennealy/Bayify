import React from 'react';
import PlaylistIndexItem from '../collection/playlist_index_item';
// Pass: playlist, curatorId, username
import ArtistIndexItem from '../collection/artist_index_item';
// Pass: artist
import { ImpulseSpinner } from 'react-spinners-kit';
import { Link } from 'react-router-dom';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchChartsPlaylists()
            .then(() => this.propst.fetchChartsHipHop())
            .then(() => this.propst.fetchChartsRock())
            .then(() => this.propst.fetchChartsPop())
            .then(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playlists.length !== this.props.playlists.length) {
            this.props.fetchChartsPlaylists()
                .then(() => this.setState({ loading: false }));
        }
    }

    render() {
        if (Object.entries(this.props.playlists).length === 0) return null;
        // if (Object.entries(this.props.artists).length === 0) return null;
        // if (Object.entries(this.props.albums).length === 0) return null;
        const playlists = Object.values(this.props.playlists);
        // const artists = Object.values(this.props.artists);
        // const albums = Object.values(this.props.albums);

        return (
            <>
                <section className="featured-container featured-playlist-container">
                    <h1 className="featured-title">Top Hits</h1>
                    <div className="playlist-index-container">

                        {this.state.loading ?
                            (<div className="loading-container">
                                <ImpulseSpinner size={50} />
                            </div>) :

                            (<ul className="playlist-index">
                                {playlists.map(playlist => (
                                    <li key={playlist.id}>
                                        <PlaylistIndexItem
                                            playlist={playlist}
                                            curatorId={playlist.curator_id}
                                            username={playlist.username} />
                                    </li>
                                ))}
                            </ul>)}
                    </div>
                </section>

                <section className="featured-container featured-artist-container">
                    <h1 className="featured-title featured-artist-title">Top Hits by Genre</h1>
                    <div className="artist-index-container">
                        {this.state.loading ?
                            (<div className="loading-container">
                                <ImpulseSpinner size={50} />
                            </div>) :

                            (<ul className="playlist-index">
                                {playlists.map(playlist => (
                                    <li key={playlist.id}>
                                        <PlaylistIndexItem
                                            playlist={playlist}
                                            curatorId={playlist.curator_id}
                                            username={playlist.username} />
                                    </li>
                                ))}
                            </ul>)}
                    </div>
                </section>
            </>
        );
    }
}