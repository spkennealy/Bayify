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

    def search
        @artists = Artist.search_by_name(params[:artist][:name])
        render :index
    end
end
