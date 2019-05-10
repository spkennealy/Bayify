class Api::PlaylistTracksController < ApplicationController
    def create 
        @playlist_track = PlaylistTrack.new(playlist_track_params)
        if @playlist_track.save
            render :show
        else
            render json: @playlist_track.errors.full_messages, status: 422
        end
    end

    def show 
        @playlist_track = PlaylistTrack.find(params[:id])
        render :show
    end

    def destroy
        @playlist_track = PlaylistTrack.find(params[:id])
        @playlist_track.destroy
    end

    private

    def playlist_track_params
        params.require(:playlist_track).permit(:track_id, :playlist_id)
    end

end
