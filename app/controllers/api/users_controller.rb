class Api::UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show.json.jbuilder'
        else
            render json: @user.errors.messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end