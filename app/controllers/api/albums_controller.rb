class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render :index
    end
    
    def show
        @album = Album.find(params[:id])
        @followed_albums = current_user.followed_albums
        @followed = @followed_albums.any? { |album| params[:id].to_i == album.id }
        render :show
    end
    
    def followed_albums
        @albums = current_user.followed_albums
        render :index
    end
    
    def featured_albums
        @album_ids = Album.ids
        @albums = []

        if @album_ids.length < 8
            @albums = Album.all
        else
            until @albums.length === 8
                random = @album_ids.sample
                @album = Album.find(random)
                @albums << @album unless @albums.include?(@album)
            end
        end

        render :featured
    end

    def follow 
        @album_follow = AlbumFollower.new(follow_params)

        if @album_follow.save
            return
        else
            render json: @album_follow.errors.full_messages, status: 422
        end
    end

    def unfollow 
        @album_follow = AlbumFollower.find_by(follow_params)
        @album_follow.destroy
    end

    private

    def follow_params
        params.require(:album).permit(:follower_id, :album_id)
    end
    
end
