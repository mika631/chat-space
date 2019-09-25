json.array! @messages do |message|
  json.message message.message
  json.image message.image.url
  json.created_at message.created_at
  json.user_name message.user.name
  json.id message.id
end
