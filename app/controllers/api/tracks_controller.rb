class Api::TracksController < ApplicationController

    def index
        # @tracks = current_user.followed_tracks
        @tracks = Track.all
        render :index
    end

    def search(title)
        @tracks = Album.search_by_title(title)
        render :index
    end
    
end
