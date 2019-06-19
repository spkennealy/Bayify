class Api::PlaylistsController < ApplicationController

    def index 
        @playlists = Playlist.all
        render :index
    end

    def show
        @playlist = Playlist.find(params[:id])
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

    private

    def playlist_params
        params.require(:playlist).permit(:title, :curator_id)
    end

end
