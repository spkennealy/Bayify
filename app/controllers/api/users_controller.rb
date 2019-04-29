class Api::UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            log_in!(@user)
            render 'api/users/show'
        else
            render :json
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end