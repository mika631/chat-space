$(function(){
  function buildHTML(message){
    let image = message.image ? message.image :'';

      var html =
        `<div class="message" data-message-id=${message.id}>
            <div class="message__update-info">
              <p class="message__update-info__talker">
                ${message.user_name}
              </p>
              <p class="message__update-info__date">
                ${message.date}
              </p>
            </div>
            <div class="lowewr-message">
              <p class="message__text">
                ${message.message}
              </p>
            </div>
              <img src=${image} >
            </div>`
          return html;
    } 
    
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);  
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
  })
});