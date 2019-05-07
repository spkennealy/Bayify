@playlists.each do |playlist|
    json.playlist do 
        json.set! playlist.id do
            json.extract! playlist, :id, :title, :curator_id, :track_ids
            if playlist.playlist_photo.attached?
                json.playlistPhoto url_for(playlist.playlist_photo)
            else
                json.playlistPhoto asset_path("default_playlist_photo")
            end
        end
    end

    json.user do 
        json.set! playlist.curator.id do
            json.extract! playlist.curator, :id, :username
        end
    end
end