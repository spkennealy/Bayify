class Api::PlaylistsController < ApplicationController

    def index 
        @playlists = Playlist.all
        render :index
    end

    def show
        @playlist = Playlist.find(params[:id])
        @followed_playlists = current_user.followed_playlists
        @followed = @followed_playlists.any? { |playlist| params[:id].to_i == playlist.id }
        render :show
    end

    def create
        @playlist = Playlist.new(playlist_params)
        
        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end

    end

    def update
        @playlist = Playlist.find(params[:id])

        if @playlist.update_attributes(playlist_params)
            render :show
        else
            render json: @playlist.errors.full_messagea, status: 422
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
    end

    def followed_playlists
        @playlists = current_user.followed_playlists
        @playlists += current_user.curated_playlists
        render :index
    end

    def featured_playlists
        @playlist_ids = Playlist.ids
        @playlists = []

        if @playlist_ids.length < 8
            @playlists = Playlist.all
        else
            until @playlists.length === 8
                random = @playlist_ids.sample
                @playlist = Playlist.find(random)
                @playlists << @playlist unless @playlists.include?(@playlist)
            end        
        end
        
        render :featured
    end

    def charts_playlists
        @top_25 = Playlist.find_by(title: "Bay Area Top 25")
        @todays_top_hits = Playlist.find_by(title: "Today's Top Hits")
        @playlists = [@top_25, @todays_top_hits]
        render :featured
    end

    def genres_playlists
        @summer = Playlist.find_by(title: "Summer")
        @hip_hop = Playlist.find_by(title: "Hip-hop")
        @party = Playlist.find_by(title: "Party")
        @alternative = Playlist.find_by(title: "Alternative")
        @reggae = Playlist.find_by(title: "Reggae")
        @rock = Playlist.find_by(title: "Rock")
        @workout = Playlist.find_by(title: "Workout")
        @chill = Playlist.find_by(title: "Chill")
        @playlists = [@summer, @chill, @party, @hip_hop, @rock, @reggae, @alternative, @workout]
        render :featured
    end

    def follow 
        @playlist_follow = PlaylistFollower.new(follow_params)

        if @playlist_follow.save
            return
        else
            render json: @playlist_follow.errors.full_messages, status: 422
        end
    end

    def unfollow 
        @playlist_follow = PlaylistFollower.find_by(follow_params)
        @playlist_follow.destroy
    end

    private

    def playlist_params
        params.require(:playlist).permit(:title, :curator_id)
    end

    def follow_params
        params.require(:playlist).permit(:follower_id, :playlist_id)
    end

end
