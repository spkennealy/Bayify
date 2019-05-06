import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import CollectionNav from './collection_nav';
import PlaylistContainer from './playlists_container';
import TracksContainer from './tracks_container';

const Collection = (props) => (
    <main className="collection-content">
        <CollectionNav openModal={props.openModal}/>
        <div className="collection-content-index">
            <ProtectedRoute exact path="/collection/playlists" component={PlaylistContainer}/>
            <ProtectedRoute exact path="/collection/tracks" component={TracksContainer}/>
        {/* <ProtectedRoute exact path="/collection/artists" component={ArtistsContainer}/> */}
        {/* <ProtectedRoute exact path="/collection/albums" component={AlbumsContainer}/> */}
        </div>
    </main>
);

export default Collection;