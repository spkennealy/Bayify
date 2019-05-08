@albums.each do |album|
    json.albums do 
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id, :year, :genre, :track_ids
            json.albumPhoto url_for(album.album_photo)
        end
    end
    
    json.artists do
        json.set! album.artist_id do
            json.extract! album.artist, :id, :name
            # json.artistPhoto url_for(artist.artist_photo)
        end
    end
end