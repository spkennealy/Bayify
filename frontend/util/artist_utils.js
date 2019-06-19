export const fetchArtists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/artists`
    });
};

export const fetchArtist = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/${id}`
    });
};

export const fetchFollowedArtists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/followed_artists`
    });
};

export const fetchFeaturedArtists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/artists/featured_artists`
    });
};

export const followArtist = (userId, artistId) => {
    return $.ajax({
        method: "POST",
        url: `/api/artists/follow`,
        data: { artist: { follower_id: userId, artist_id: artistId } }
    });
};

export const unfollowArtist = (userId, artistId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/artists/unfollow`,
        data: { artist: { follower_id: userId, artist_id: artistId } }
    });
};