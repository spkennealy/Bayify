class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render :index
    end
    
    def show
        @album = Album.find(params[:id])
        render :show
    end
    
    def followed_albums
        @albums = current_user.followed_albums
        render :index
    end
    
end
