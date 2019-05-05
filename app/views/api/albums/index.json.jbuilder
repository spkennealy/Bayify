@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :artist_id, :year, :genre, :track_ids
        # json.artist album.artist, :id, :name   #==> might use later
        json.albumPhoto url_for(album.album_photo)
    end
end