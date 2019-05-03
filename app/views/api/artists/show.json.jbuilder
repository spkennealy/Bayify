json.extract! @artist, :id, :name
json.artistPhoto url_for(@artist.artist_photo)
@artist.albums.each do |album|
    json.set album.id do 
        json.extract! album, :id, :title
        json.albumPhoto url_for(album.album_photo)
    end
end
# @artist.