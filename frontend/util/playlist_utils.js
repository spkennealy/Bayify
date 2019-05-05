export const fetchPlaylists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists`
    });
};

export const fetchPlaylist = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/${id}`
    });
};

export const createPlaylist = (playlist) => {
    return $.ajax({
        method: "POST",
        url: `/api/playlists`
    });
};

export const updatePlaylist = (playlist) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/playlists/${playlist.id}`
    });
};

export const deltePlaylist = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlists/${id}`
    });
};