json.extract! @track, :id, :title, :track_length
json.album @track.album, :id, :title
json.artist @track.artist, :id, :name
json.src url_for(@track.src)
# json.artwork url_for(@track.album.photo)