class SessionsController < ApplicationController
   
    def new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    
    end

    def destroy
        if current_user
            logout!
            render "api/session/new" # POSSIBLY CHANGE
        else
            render json: 'Can\'t destroy a user that doesn\'t exist!', status: 404
        end
    end
end
