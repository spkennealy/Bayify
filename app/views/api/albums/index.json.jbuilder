@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :artist_id, :year, :genre
        json.trackPhoto url_for(album.album_photo)
    end
end