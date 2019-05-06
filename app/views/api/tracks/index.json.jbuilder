@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :track_length, :album_id
        json.artist track.album.artist, :id, :name
        json.album track.album, :id, :title
        json.trackUrl url_for(track.track)
    end
end