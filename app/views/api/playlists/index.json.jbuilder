@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :curator_id, :track_ids
        json.curator playlist.curator, :id, :username
        if playlist.playlist_photo.attached?
            json.playlistPhoto url_for(playlist.playlist_photo)
        else
            json.playlistPhoto asset_path("default_playlist_photo")
        end
    end
end