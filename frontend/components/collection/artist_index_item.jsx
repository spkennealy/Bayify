import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = (props) => {
    return (
        <>
            <Link to={`/artists/${props.artist.id}`}>
                <img 
                    id="artist-index-item-img"
                    src={props.artist.artistPhoto} />
            </Link>

            <Link to={`/artists/${props.artist.id}`}>
                <h2 id="add-font">{props.artist.name}</h2>
            </Link>
        </>
    )
};

export default ArtistIndexItem;