json.extract! @album, :id, :title, :artist_id, :year, :genre
json.urlPhoto url_for(@album.album_photo)
@album.tracks.each do |track|
    json.set! track.id do 
        json.extract! track, :id, :title, :track_length
        json.trackUrl url_for(track.track)
    end
end
