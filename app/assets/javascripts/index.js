$(function(){
  function buildHTML(users){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ users.name } </p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ users.id }" data-user-name="${ users.name}">追加</div>
                </div>`
                return html;
    }

    function appendErrMsgToHTML(msg){
      var html =`<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ msg } </p>
                </div>`
    return html;
    }

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url:'/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(data){
      $.each(data,function(i, data){
      var html =buildHTML(data);
        $('#user-search-result').append(html);
        if(input == ""){
          $(".chat-group-user").remove();
          return false;
        }
        else{
          appendErrMsgToHTML("一致するユーザーが見つかりません");
          // console.log("OK")
        }
      })
    })
    console.log("OK")
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
    return false;

  })
});
