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
        url: `/api/playlists`,
        data: { playlist }
    });
};

export const updatePlaylist = (playlist) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/playlists/${playlist.id}`,
        data: { playlist }
    });
};

export const deletePlaylist = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlists/${id}`
    });
};

export const fetchFollowedPlaylists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/followed_playlists`
    });
};

export const fetchFeaturedPlaylists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/featured_playlists`
    });
};

export const fetchChartsPlaylists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/charts_playlists`
    });
};

export const fetchGenresPlaylists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/playlists/genres_playlists`
    });
};

export const followPlaylist = (userId, playlistId) => {
    return $.ajax({
        method: "POST",
        url: `/api/playlists/follow`,
        data: { playlist: { follower_id: userId, playlist_id: playlistId } }
    });
};

export const unfollowPlaylist = (userId, playlistId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlists/unfollow`,
        data: { playlist: { follower_id: userId, playlist_id: playlistId } }
    });
};