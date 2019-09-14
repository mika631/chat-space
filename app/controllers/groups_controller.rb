class GroupsController < ApplicationController

  def new
  end

  def create
    Group.create(group_name:group_params[:group_name],user_id:current_user.id)
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    group = Group.find(params[:id])
    if group.user_id == current_user.id
      group.update(group_params)
    end
  end


end
