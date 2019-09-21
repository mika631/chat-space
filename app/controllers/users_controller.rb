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

  def index
    group = Group.find(params[:group_id])
    @member = group.users
    member.each do |member_name|
      puts member_name[:name]
    end
    respond_to do |format|
      format.html
      format.json
    end
  end

  private
  
  # form_forを使用
  def user_params
    params.require(:user).permit(:name, :email)
  end
end

