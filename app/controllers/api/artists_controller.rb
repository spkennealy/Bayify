class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render :index
    end
    
    def show
        @artist = Artist.find(params[:id]) 
        @followed_artists = current_user.followed_artists
        @followed = @followed_artists.any? { |artist| params[:id].to_i == artist.id }
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

    def follow 
        @artist_follow = ArtistFollower.new(follow_params)

        if @artist_follow.save
            return
        else
            render json: @artist_follow.errors.full_messages, status: 422
        end
    end

    def unfollow 
        @artist_follow = ArtistFollower.find_by(follow_params)
        @artist_follow.destroy
    end

    private

    def follow_params
        params.require(:artist).permit(:follower_id, :artist_id)
    end

end
