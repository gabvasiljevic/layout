var loged = false; // Controla se o usuario está logado ou não
var ChatAtual = ''; // Com quem eu estou conversando agora
var username = 'wendell';

/*Chamada de funções para inicializações*/
signIn();
getFriends();
setInterval(getMessages, 100);
$('#box1').hide();
/*Fim das chamadas de funções*/

/*Implementação de funções*/

function signIn(){
    loged = true;
}

function getFriends(){

    myurl = 'http://istimchatapi.nodejitsu.com/users/getFriends?username=' + username;
    //myurl = 'http://localhost:1337/users/getFriends?username=' + username;

    $.get(myurl,function(data, status){

        for(var i = 0; i < data.length; i++){

            var txt = '<a href="#" class="list-group-item amigosDoChat" data-userid="'+ data[i]+'">' + data[i] + '<span class="fa icon fa-user pull-right color-green"></span></a>';    
            $('#friends').append(txt);
        }

    });
}

function sendMessage()
{
    var text = "";
    var msg = document.getElementById("textarea").value;
     myurl = 'http://istimchatapi.nodejitsu.com/messages/sendMessage?username1='+username+'&username2='+ChatAtual+'&msg='+ msg;
    //myurl = 'http://localhost:1337/messages/sendMessage?username1='+username+'&username2='+ChatAtual+'&msg='+ msg ;

    if(msg != ''){
        $.get(myurl,function(data, status){
            document.getElementById("textarea").value = "";
            document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight;
        });
    }

}

function getMessages() {
    var text = "";
    if(ChatAtual != ''){
         myurl = 'http://istimchatapi.nodejitsu.com/messages/getMessages?username1='+username+'&username2='+ChatAtual;
        //myurl = 'http://localhost:1337/messages/getMessages?username1='+username+'&username2='+ChatAtual;
        console.log(myurl);
        $.get(myurl,function(data, status){
            console.log(data.msgs);
            for(var i=0; i < data.msgs.length;i++){
                //console.log(data.msgs[i]);
                if(data.msgsOwner[i] == username){
                    text += "<div class=\"bubble\">" + data.msgs[i] + "</div> <br>";
                }
                else
                {
                    text += "<div class=\"bubble2\">" + data.msgs[i] + "</div> <br>";
                }
            }
            document.getElementById("chatScreen").innerHTML = text;
            //document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight;
        });
    }
}



/*Fim das implementações*/

/*Funções com JQuery*/

$("#friends").on('click', 'a', function(){
    ChatAtual = $(this).attr('data-userid');
    $("#userlabel").html(ChatAtual);
    $('#box1').show();
});

//Controle do enter do chat
$("#box1").keydown(function(){
    if (event.keyCode === 13) {
        sendMessage();
    }else if(event.keyCode === 27){
        $('#box1').hide();
        ChatAtual = '';
    }
});

$("#NomeDoJogador").text(username);
/*Fim das funções com JQuery*/
