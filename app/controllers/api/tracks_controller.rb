class Api::TracksController < ApplicationController

    def index
        @tracks = current_user.followed_tracks
        render :index
    end
    
end
