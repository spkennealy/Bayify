json.albums do 
    json.set! @album.id do
        json.extract! @album, :id, :title
        json.albumPhoto url_for(@album.album_photo)
    end
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :title, :track_length
            # json.trackUrl url_for(track.track)
        end
    end
end
