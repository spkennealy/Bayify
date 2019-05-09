import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = (props) => {
    if (!props.album || props.album === undefined || Object.entries(props.album).length === 0) return null;
    if (!props.artists || props.artists === undefined || Object.entries(props.artists).length === 0) return null;
    
    const artist = props.artists[props.album.artist_id];

    if (artist === undefined) return null;

    return (
        <>
            <Link to={`/albums/${props.album.id}`}>
                <img src={props.album.albumPhoto} alt={`${props.album.title} photo`} />
                <h2 id="album-show-title">{props.album.title}</h2>
            </Link>

            <Link to={`/artist/${artist.id}`}>
                <h3>{artist.name}</h3>
            </Link>

        </>
    );
};

export default AlbumIndexItem;