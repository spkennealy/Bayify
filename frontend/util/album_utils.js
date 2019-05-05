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