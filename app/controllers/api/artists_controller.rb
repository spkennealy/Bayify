class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        # @artists = current_user.followed_artists
        render :index
    end

    def show
        @artist = Artist.find(params[:id]) #.includes(:albums, :tracks, :artist_photo, :background_photo)
        render :show
    end

    def search(name)
        @artists = Album.search_by_name(name)
        render :index
    end
end
