class Api::TracksController < ApplicationController

    def show
        @track = Track.find(params[:id])
        render :show
    end
end
