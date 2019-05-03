class Api::PlaylistsController < ApplicationController

    def index 
        @playlists = current_user.followed_playlists
        render :index
    end

    def show
        @playlist = Playlist.find(params[:id])
        render :show
    end
end
