class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render :index
    end
    
    def search
        @tracks = Track.search_by_title(params[:track][:title])
        @albums = Album.search_by_title(params[:album][:title])
        @playlists = Playlist.search_by_title(params[:playlist][:title])
        @artists = Artist.search_by_name(params[:artist][:name])
        render :search
    end
    
    def followed_tracks
        @tracks = current_user.followed_tracks
        render :index
    end
    
end
