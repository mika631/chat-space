json.id  @message.id
json.user_name  @message.user.name
json.data  @message.created_at.strftime("%Y/%m/%d %H:%M")
json.(@message, :message)
json.image  @message.image.url
