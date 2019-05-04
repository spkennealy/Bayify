class Api::ArtistsController < ApplicationController

    def index
        @artists = current_user.followed_artists
        render :index
    end

    def show
        @artist = Artist.find(params[:id]) #.includes(:albums, :tracks, :artist_photo, :background_photo)
        render :show
    end
end
