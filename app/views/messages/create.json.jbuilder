json.id  @message.id
json.user_name  @message.user.name
json.data  @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.message  @message.message
json.image  @message.image
