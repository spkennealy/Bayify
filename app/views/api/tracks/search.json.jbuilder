json.tracks do 
    @tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :title, :track_length, :album_id
            json.artist track.artist
            json.album track.album
            json.albumPhoto url_for(track.album.album_photo)
        end
    end
end

json.playlists do
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.extract! playlist, :id, :title, :curator_id, :track_ids
            if playlist.playlist_photo.attached?
                json.playlistPhoto url_for(playlist.playlist_photo)
            else
                json.playlistPhoto image_url("default_playlist_photo.jpg")
            end
        end
    end
end

json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :year, :genre, :track_ids
            json.albumPhoto url_for(album.album_photo)
        end
    end
end

json.artists do
    @artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name
            json.artistPhoto url_for(artist.artist_photo)
        end
    end
end