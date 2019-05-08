class Api::TracksController < ApplicationController

    def index
        # @tracks = current_user.followed_tracks
        @tracks = Track.all
        render :index
    end
    
end
