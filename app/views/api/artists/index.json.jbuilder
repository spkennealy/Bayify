@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name
        json.artistPhoto url_for(artist.artist_photo)
    end
end