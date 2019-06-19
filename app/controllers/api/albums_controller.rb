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

        if @album_ids.length < 8
            @albums = Album.all
        else
            until @albums.length === 8
                random = @album_ids.sample
                @album = Album.find(random)
                @albums << @album unless @albums.include?(@album)
            end
        end

        render :featured
    end
    
end
