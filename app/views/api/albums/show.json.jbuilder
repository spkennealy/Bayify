json.albums do 
    json.set! @album.id do
        json.extract! @album, :id, :title, :artist_id ,:track_ids
        json.albumPhoto url_for(@album.album_photo)
        json.followed @followed
    end
end

json.artists do 
    json.set! @album.artist_id do
        json.extract! @album.artist, :id, :name
    end
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :title, :track_length, :album_id
            json.trackUrl url_for(track.track)
            json.albumPhoto url_for(track.album.album_photo)
        end
    end
end
