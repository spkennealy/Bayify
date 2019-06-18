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