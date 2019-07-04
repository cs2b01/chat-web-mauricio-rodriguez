function getData(){
        //$('#action').html("Authenticating...");
        $('#action').append('<img width="30" height="30" src="images/loading.gif"/>');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");
                if(response['status']==401){
                $('#action').append('<img width="30" height="30" src="images/equis.jpg"/>');
                }else{
                var url = 'http://'+ document.domain+ ':'+ location.port + '/static/chat.html';
                $(location).attr('href',url);
                }

                //$('#action').html(response['statusText']);
            },
            error: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");

                //$('#action').append('<img width="35" height="35" src="/static/images/logo/fail.png"/>');
                //$('#action').html(response['statusText']);
                if(response['status']==401){
                $('#action').append('<img width="30" height="30" src="images/equis.jpg"/>');
                }else{
                var url = 'http://'+ document.domain+ ':'+ location.port + '/static/chat.html';
                $(location).attr('href',url);
                }
            }
        });
    }
