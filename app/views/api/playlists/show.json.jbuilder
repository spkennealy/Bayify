json.playlists do 
    json.set! @playlist.id do
        json.extract! @playlist, :id, :title, :curator_id, :track_ids, :playlist_track_ids
        if @playlist.playlist_photo.attached?
            json.playlistPhoto url_for(@playlist.playlist_photo)
        else
            json.playlistPhoto image_url("default_playlist_photo")
        end
    end
end

json.users do 
    json.set! @playlist.curator.id do
        json.extract! @playlist.curator, :id, :username
    end
end

json.tracks do
    @playlist.tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :title, :album_id, :track_length
            json.trackUrl url_for(track.track)
        end
    end
end

json.albums do
    @playlist.tracks.each do |track|
        json.set! track.album_id do
            json.extract! track.album, :id, :title, :artist_id, :genre, :year
        end
    end
end

json.artists do
    @playlist.tracks.each do |track|
        json.set! track.album.artist.id do
            json.extract! track.album.artist, :id, :name
        end
    end
end