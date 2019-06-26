var currentUserId = 0;
var currentClickedId = 0;
function whoami(){
        $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#cu_username').html(response['username'])
                var name = response['name']+" "+response['fullname'];
                currentUserId = response['id']
                $('#cu_name').html(name);
                allusers();
            },
            error: function(response){
                //alert(JSON.stringify(response));
            }
        });
    }

function whoarethey(ClickedId,user){
     $.ajax({
            url:'/users',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                    $('#their_username').append(response[ClickedId-1].username);
                },
            error: function(response){
                //alert(JSON.stringify(response));
            }
        });
}

    function allusers(){
        $.ajax({
            url:'/users',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                var i = 0;
                $.each(response, function(){
                    f = '<div class="alert alert-secondary" role="alert" onclick=loadMessages('+currentUserId+','+response[i].id+') >';
                    f = f + response[i].username;
                    f = f + '</div>';
                    i = i+1;
                    $('#allusers').append(f);
                });
            },
            error: function(response){
                //alert(JSON.stringify(response));
            }
        });
    }

    function loadMessages(user_from_id, user_to_id){
        //alert(user_from_id);
        //alert(user_to_id);
        $('#messages').html("")
        $('#their_username').html("")
        currentClickedId = user_to_id;
        //var talker_with = '<div class="alert alert-secondary" role="alert">';
        //talker_with = talker_with + whoarethey(currentClickedId);
        //talker_with = talker_with + '</div>';
        $.ajax({
            url:'/messages/'+user_from_id+"/"+user_to_id,
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                whoarethey(currentClickedId);
                //$('#their_username').append(talker_with);
                var i=0;
                $.each(response, function(){
                    if (response[i].user_from_id != currentUserId){
                    f=  '<div class="alert alert-secondary" role="alert">';
                    f = f + response[i].content;
                    f = f + '</div>';
                    i = i+1;
                    $('#messages').append(f);}
                    else{
                    f=  '<div class="alert alert-primary" role="alert">';
                    f = f + response[i].content;
                    f = f + '</div>';
                    i = i+1;
                    $('#messages').append(f);
                    }
                });
            },
            error: function(response){
                alert(JSON.stringify(response));
            }
        });
    }

    function sendMessage(){
        var message = $('#postmessage').val();
        $('#postmessage').val('');
        whoarethey();
        var data = JSON.stringify({
                "user_from_id": currentUserId,
                "user_to_id": currentClickedId,
                "content": message
            });

        $.ajax({
            url:'/create/messages',
            type:'POST',
            contentType: 'application/json',
            data : data,
            dataType:'json',
            success: function(response){
            var meanwhile = '<div class="alert alert-primary" role="alert">';
            meanwhile = meanwhile + message+ '</div>'
            $('#messages').append(meanwhile);
                //alert(JSON.stringify(response));
            },
            error: function(response){
               //alert(JSON.stringify(response));
            }
        });
    }
