class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render :index
    end
    
    def show
        @artist = Artist.find(params[:id]) #.includes(:albums, :tracks, :artist_photo, :background_photo)
        render :show
    end
    
    def followed_artists 
        @artists = current_user.followed_artists
        render :index
    end

    def featured_artists
        @artist_ids = Artist.ids
        @artists = []

        if @artist_ids.length < 8
            @artists = Artist.all
        else
            until @artists.length === 8
                random = @artist_ids.sample
                @artist = Artist.find(random)
                @artists << @artist unless @artists.include?(@artist)
            end
        end

        render :index
    end

end
