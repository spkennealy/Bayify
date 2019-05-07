export const addPlaylistTrack = (playlistTrack) => {
    return $.ajax({
        method: "POST",
        url: `/api/playlist_tracks`,
        data: playlistTrack
    });
};

export const removePlaylistTrack = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlist_tracks/${id}`
    });
};