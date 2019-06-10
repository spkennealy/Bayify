class Api::SessionsController < ApplicationController
   
    def new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render template: 'api/users/show.json.jbuilder'
        else
            render json: { "login": "Incorrect username or password." }, status: 401
        end
    
    end

    def destroy
        if current_user
            logout!
        else
            render json: 'Can\'t destroy a user that doesn\'t exist!', status: 404
        end
    end
end
