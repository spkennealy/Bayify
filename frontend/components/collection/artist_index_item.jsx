import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = (props) => {
    return (
        <>
            <Link to={`/artists/${props.artist.id}`}>
                <img src={props.artist.artistPhoto} alt={`${props.artist.title} photo`} />
            </Link>

            <Link to={`/artists/${props.artist.id}`}>
                <h2 id="add-font">{props.artist.name}</h2>
            </Link>
        </>
    )
};

export default ArtistIndexItem;