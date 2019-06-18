export const fetchAlbums = () => {
    return $.ajax({
        method: "GET",
        url: `/api/albums`
    });
};

export const fetchAlbum = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${id}`
    });
};

export const fetchFollowedAlbums = () => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/followed_albums`
    });
};