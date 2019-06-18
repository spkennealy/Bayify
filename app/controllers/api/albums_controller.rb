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
    
    def featured_albums
        @album_ids = Album.ids
        @albums = []

        10.times do
            random = @album_ids.sample
            @album = Album.find(random)
            @albums << @album unless @albums.include?(@album)
        end

        render :index
    end
    
end
