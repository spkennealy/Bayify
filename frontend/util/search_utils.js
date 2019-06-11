export const search = (input) => {
    return $.ajax({
        method: "GET",
        url: `/api/tracks/search`,
        data: {
            album: { title: `${input}`},
            playlist: { title: `${input}`},
            track: { title: `${input}`},
            artist: { name: `${input}`}
        }
    });
};