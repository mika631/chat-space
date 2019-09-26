$(document).on('turbolinks:load',function(){
  function buildHTML(message){
    let image = message.image ? message.image :'';

      var html =
        `<div class="message" data-id=${message.id}>
            <div class="message__update-info">
              <p class="message__update-info__talker">
                ${message.user_name}
              </p>
              <p class="message__update-info__date">
                ${message.data}
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
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');    
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });

  group_id = $('.main-header').data('id')

  if (document.URL.match(`/groups/${group_id}/messages`) ){
    var reloadMessages = function() {
      last_message_id = $('.message:last').data('id')
      group_id = $('.main-header').data('id')
      $.ajax({
        url: `/groups/${group_id}/api/messages`,
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
        messages.forEach(function(message){
         insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
        });
      })
      .fail(function() {
      });
    };
  }
  setInterval(reloadMessages, 5000);
});