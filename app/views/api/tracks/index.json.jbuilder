@tracks.each do |track|
    json.tracks do 
        json.set! track.id do
            json.extract! track, :id, :title, :track_length, :album_id
            json.trackUrl url_for(track.track)
        end
    end 

    json.artists do
        json.set! track.album.artist.id do
            json.extract! track.album.artist, :id, :name
        end
    end
    
    json.albums do 
        json.set! track.album.id do
            json.extract! json.album track.album, :id, :title
        end
    end
end