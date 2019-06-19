json.artists do
    json.set! @artist.id do
        json.extract! @artist, :id, :name
        json.artistPhoto url_for(@artist.artist_photo)
        json.backgroundPhoto url_for(@artist.background_photo)
        json.followed @followed
    end
end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :year, :genre, :track_ids
            json.albumPhoto url_for(album.album_photo)
        end
    end
end

json.tracks do 
    @artist.albums.each do |album|
        album.tracks.each do |track|
            json.set! track.id do
                json.extract! track, :id, :title, :track_length, :album_id
                json.trackUrl url_for(track.track)
                json.albumPhoto url_for(track.album.album_photo)
            end
        end
    end
end