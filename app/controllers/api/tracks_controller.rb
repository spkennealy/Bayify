class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render :index
    end
    
    def search
        @tracks = Track.search_by_title(params[:track][:title])
        @albums = Album.search_by_title(params[:album][:title])
        @playlists = Playlist.search_by_title(params[:playlist][:title])
        @artists = Artist.search_by_name(params[:artist][:name])
        render :search
    end
    
    def followed_tracks
        @tracks = current_user.followed_tracks
        render :index
    end

    def follow 
        @track_follow = TrackFollower.new(follow_params)
        @user = current_user

        if @track_follow.save
            render 'api/users/show'
        else
            render json: @track_follow.errors.full_messages, status: 422
        end
    end

    def unfollow 
        @track_follow = TrackFollower.find_by(follow_params)
        @track_follow.destroy
    end

    private

    def follow_params
        params.require(:track).permit(:follower_id, :track_id)
    end
    
end
