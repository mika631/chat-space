$(function(){
  function buildHTML(users){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ users.name } </p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ users.id }" data-user-name="${ users.name}">追加</div>
                </div>`
                return html;
  };

  function buildHTML2(msg){
    var htm = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ msg } </p>
                </div>`
                return htm;
  };

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url:'/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(data){
      $('#user-search-result').children().remove();
      if(data.length !== 0)
      $.each(data,function(i, data){ 
      var html = buildHTML(data);
      $('#user-search-result').append(html)
      }
      )
      else {
         msg = "一致するユーザーが見つかりません"
         var htm = buildHTML2(msg)
         $('#user-search-result').append(htm)
      }
    })
   
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
    return false;
  })
});


