json.extract! user, :id, :username 
json.savedTracks user.followed_tracks.ids

# might want to query database for all pages on explore
# add all playlists followed and recently played 
# (playlists, artists, or albums)