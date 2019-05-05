export const fetchTracks = () => {
    return $.ajax({
        method: "GET",
        url: `/api/tracks`
    });
};

// MIGHT NOT NEED
// export const fetchAlbumTracks = (albumId) => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/tracks/${albumId}`
//     });
// };