import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = (props) => {
    console.log(props);
    if (Object.entries(props.album).length === 0) return null;
    if (Object.entries(props.artists).length === 0) return null;
    // debugger;

    const artist = props.artists[props.album.artist_id];

    return (
        <>
            <Link to={`/albums/${props.album.id}`}>
                <img src={props.album.albumPhoto} alt={`${props.album.title} photo`} />
                <h2>{props.album.title}</h2>
            </Link>

            <Link to={`/artist/${artist.id}`}>
                <h3>{artist.name}</h3>
            </Link>

        </>
    );
};

export default AlbumIndexItem;