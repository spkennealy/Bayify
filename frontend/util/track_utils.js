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

export const followTrack = (userId, trackId) => {
    return $.ajax({
        method: "POST",
        url: `/api/tracks/follow`,
        data: { track: { follower_id: userId, track_id: trackId } }
    });
};

export const unfollowTrack = (userId, trackId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/tracks/unfollow`,
        data: { track: { follower_id: userId, track_id: trackId } }
    });
};