json.extract! @playlist, :id, :title
if @playlist.playlist_photo.attached?
    json.playlistPhoto url_for(@playlist.playlist_photo)
else
    json.playlistPhoto asset_path("default_playlist_photo")
end

json.curator @playlist.curator, :id, :username

json.tracks do
    @playlist.tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :title, :album_id, :track_length
        end
    end
end