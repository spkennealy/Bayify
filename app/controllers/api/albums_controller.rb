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

    def search
        @albums = Album.search_by_title(params[:album][:title])
        render :index
    end
end
