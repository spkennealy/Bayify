json.search do 
    json.tracks do 
        json.array! @tracks do |track|
            json.extract! track, :id, :title, :track_length, :album_id
        end
    end

    json.playlists do
        json.array! @playlists do |playlist|
            json.extract! playlist, :id, :title, :curator_id, :track_ids
            if playlist.playlist_photo.attached?
                json.playlistPhoto url_for(playlist.playlist_photo)
            else
                json.playlistPhoto image_url("default_playlist_photo.jpg")
            end
        end
    end

    json.albums do
        json.array! @albums do |album|
            json.extract! album, :id, :title, :artist_id, :year, :genre, :track_ids
            json.albumPhoto url_for(album.album_photo)
        end
    end

    json.artists do
        json.array! @artists do |artist|
            json.extract! artist, :id, :name
            json.artistPhoto url_for(artist.artist_photo)
        end
    end
end