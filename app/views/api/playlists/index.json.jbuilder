@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :curator_id
        json.playlistUrl url_for(playlist.playlist_photo)
    end
end