json.extract! @artist, :id, :name
json.artistPhoto url_for(@artist.artist_photo)
json.backgroundPhoto url_for(@artist.background_photo)

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title
            json.albumPhoto url_for(album.album_photo)
        end
    end
end