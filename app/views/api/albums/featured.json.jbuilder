@albums.each do |album|
    json.albums do 
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :year, :genre, :track_ids
            json.albumPhoto url_for(album.album_photo)
            json.artist album.artist
        end
    end
end