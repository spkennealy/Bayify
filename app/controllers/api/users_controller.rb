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
            # {
            #     "invalid-email": "The email address you supplied is invalid.",
            #     "short-password": "Your password is too short.",
            #     "email-taken": "We're sorry, that email is taken.",
            #     "email-doesnt-match": "Email address doesn't match.",
            #     "username-taken": "We're sorry, that username is taken.",
            # }
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end