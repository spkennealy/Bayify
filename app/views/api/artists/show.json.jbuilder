json.set! @artist.id do 
    json.extract! @artist, :id, :name, :album_ids, :track_ids
    json.artistPhoto url_for(@artist.artist_photo)
end

# json.albums do 
#     @artist.albums.each do |album|
#         json.set! album.id do
#             json.extract! album, :id, :title
#             json.albumPhoto url_for(album.album_photo)
#         end
#     end
# end