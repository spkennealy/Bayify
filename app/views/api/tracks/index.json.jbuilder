@tracks.each do |track|
    json.tracks do 
        json.set! track.id do
            json.extract! track, :id, :title, :track_length, :album_id
            json.trackUrl url_for(track.track)
            track.playlist_tracks.each do |playlist_track|
                json.extract! playlist_track, :playlist_id
            end
            json.albumPhoto url_for(track.album.album_photo)
        end
    end 

    json.artists do
        json.set! track.album.artist_id do
            json.extract! track.album.artist, :id, :name
        end
    end
    
    json.albums do 
        json.set! track.album.id do
            json.extract! track.album, :id, :title, :artist_id
            json.albumPhoto url_for(track.album.album_photo)
        end
    end
end