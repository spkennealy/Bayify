json.extract! @playlist, :id, :title, :curator_id
@playlist.tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :album_id, :track_length
        json.trackUrl url_for(track.track)
    end
end