class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private
  
  # form_forを使用
  def user(params)  
    params.reqire(:user).permit(:name, :email)
  end
end
