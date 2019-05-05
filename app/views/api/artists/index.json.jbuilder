@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name, :album_ids, :track_ids  # not sure if I need these here
        json.artistPhoto url_for(artist.artist_photo)
    end
end