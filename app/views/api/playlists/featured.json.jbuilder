@playlists.each do |playlist|
    json.playlists do 
        json.set! playlist.id do
            json.extract! playlist, :id, :title, :curator_id, :track_ids
            
            if playlist.playlist_photo.attached?
                json.playlistPhoto url_for(playlist.playlist_photo)
            else
                json.playlistPhoto image_url("default_playlist_photo.jpg")
            end

            json.username playlist.curator.username
        end
    end
end