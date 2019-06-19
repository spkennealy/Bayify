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

// TODO: FINISH REDUX CYCLE FOR SAVING & UNSAVING SONGS
// export const followAlbum = (userId, albumId) => {
//     return $.ajax({
//         method: "POST",
//         url: `/api/albums/follow`,
//         data: { album: { follower_id: userId, album_id: albumId } }
//     });
// };

// export const unfollowAlbum = (userId, albumId) => {
//     return $.ajax({
//         method: "DELETE",
//         url: `/api/albums/unfollow`,
//         data: { album: { follower_id: userId, album_id: albumId } }
//     });
// };