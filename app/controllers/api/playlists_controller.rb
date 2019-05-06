class Api::PlaylistsController < ApplicationController

    def index 
        @playlists = current_user.followed_playlists
        @playlists += current_user.curated_playlists
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
        render :index
    end

    private

    def playlist_params
        params.require(:playlist).permit(:title, :curator_id)
    end

end
