@playlists.each do |playlist|
    json.playlists do 
        json.set! playlist.id do
            json.extract! playlist, :id, :title, :curator_id, :track_ids
            if playlist.playlist_photo.attached?
                json.playlistPhoto url_for(playlist.playlist_photo)
            else
                json.playlistPhoto image_url("default_playlist_photo.jpg")
            end

            json.playlist_tracks do 
                playlist.playlist_tracks.each do |playlist_track|
                    json.set! playlist_track.track_id do
                        json.extract! playlist_track, :id, :track_id, :playlist_id
                    end
                end
            end
        end
    end

    json.users do 
        json.set! playlist.curator.id do
            json.extract! playlist.curator, :id, :username
        end
    end
end