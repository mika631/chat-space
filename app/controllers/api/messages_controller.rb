class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])  
    last_message_id = params[:id].to_i
    respond_to do |format|
      format.html
      format.json {@messages = group.messages.includes(:user).where("id > #{last_message_id}")}
    end
  end
end

