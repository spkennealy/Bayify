export const fetchTracks = () => {
    return $.ajax({
        method: "GET",
        url: `/api/tracks`
    });
};

export const fetchFollowedTracks = () => {
    return $.ajax({
        method: "GET",
        url: `/api/tracks/followed_tracks`
    });
};