class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all
        # @albums = current_user.followed_albums
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end

    def search(title)
        @albums = Album.search_by_title(title)
        render :index
    end
end
