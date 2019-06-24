import React from 'react';
import PlaylistIndexItem from '../collection/playlist_index_item';
import { ImpulseSpinner } from 'react-spinners-kit';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchGenresPlaylists()
            .then(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playlists.length !== this.props.playlists.length) {
            this.props.fetchGenresPlaylists()
                .then(() => this.setState({ loading: false }));
        }
    }

    render() {
        if (Object.entries(this.props.playlists).length === 0) return null;
        const playlists = Object.values(this.props.playlists);

        return (
            <>
                <section className="featured-container featured-playlist-container">
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
            </>
        );
    }
}