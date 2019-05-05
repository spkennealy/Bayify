json.set! @album.id do 
    json.extract! @album, :id, :name, :album_ids, :track_ids
    json.albumPhoto url_for(@album.album_photo)
end


# json.extract! @album, :id, :title, :artist_id, :year, :genre
# json.urlPhoto url_for(@album.album_photo)
# @album.tracks.each do |track|
#     json.set! track.id do 
#         json.extract! track, :id, :title, :track_length
#         json.trackUrl url_for(track.track)
#     end
# end
