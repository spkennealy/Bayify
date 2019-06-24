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

export const fetchFeaturedAlbums = () => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/featured_albums`
    });
};

export const fetchNewReleaseAlbums = () => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/new_releases`
    });
};

export const followAlbum = (userId, albumId) => {
    return $.ajax({
        method: "POST",
        url: `/api/albums/follow`,
        data: { album: { follower_id: userId, album_id: albumId } }
    });
};

export const unfollowAlbum = (userId, albumId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/albums/unfollow`,
        data: { album: { follower_id: userId, album_id: albumId } }
    });
};