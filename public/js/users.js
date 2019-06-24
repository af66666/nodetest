$("#submit").click(function(){
    var params = {
        username: $("#username").val(),
        password: $("#password").val()
    };
    $.ajax({
        data: params,
        url: '/users',
        dataType: 'json',
        type:'POST',
        timeout: 5000,
        success: function(res){
            var res = $.parseJSON(res);
            $('#submit').html('请求成功');
            alert(res.message);
            console.log(res.tip);
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
});