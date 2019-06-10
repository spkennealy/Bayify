export const fetchAlbumByName = (name) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums`,
        data: {
            title: `${name}`
        }
    });
};

export const fetchPlaylistByName = (name) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums`
    });
};

export const fetchArtistByName = (name) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums`
    });
};