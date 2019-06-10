class Api::TracksController < ApplicationController

    def index
        # @tracks = current_user.followed_tracks
        @tracks = Track.all
        render :index
    end

    def search
        @tracks = Track.search_by_title(params[:track][:title])
        render :index
    end
    
end
