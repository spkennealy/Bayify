json.extract! @playlist, :id, :title, :curator_id, :track_ids
json.playlistPhoto url_for(@playlist.playlist_photo)

# @playlist.tracks.each do |track|
#     json.set! track.id do
#         json.extract! track, :id, :title, :album_id, :track_length
#     end
# end