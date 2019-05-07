json.playlists do 
    json.set! @playlist.id do
        json.extract! @playlist, :id, :title, :curator_id, :track_ids
        if @playlist.playlist_photo.attached?
            json.playlistPhoto url_for(@playlist.playlist_photo)
        else
            json.playlistPhoto asset_path("default_playlist_photo")
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
        end
    end
end