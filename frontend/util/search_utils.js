export const fetchAlbumByTitle = (title) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/search`,
        data: {
            album: { title: `${title}`}
        }
    });
};

export const fetchPlaylistByTitle = (title) => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/search`,
        data: {
            playlist: { title: `${title}` }
        }
    });
};

export const fetchArtistByName = (name) => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/search`,
        data: {
            artist: { name: `${name}` }
        }
    });
};

export const fetchTrackByTitle = (title) => {
    return $.ajax({
        method: "GET",
        url: `/api/tracks/search`,
        data: {
            track: { title: `${title}` }
        }
    });
};