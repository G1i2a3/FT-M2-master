var URL = 'http://localhost:5000/amigos';

let showFriends = function(){
    $('#lista').empty();
    $.get(`${URL}`, function(friends){
    console.log(friends);
    friends.forEach(e => {
        let li = document.createElement('li');
        li.id = e.id;
        li.innerText = e.name;
        let list = document.getElementById('lista');
        list.appendChild(li);
    // $('#lista').append('<li id="${e.id}">${e.name} X</li>')
        })
    })
};

$('#boton').click(showFriends);

$('#search').click(function(){

    let id = $('#input').val();

    if (id){
        $.get(`${URL}/${id}`, function (friend){
            console.log(friend);

            $('#amigo').text(`El nombre de mi amigo es: ${friend.name}`)
            $('#input').val("");
        })
    } else {
        $('#amigo').text("Tenes que ingresar un ID");
    }
});

let deleteFriend = function (){

    let id = $('#inputDelete').val();
    let friend;
    if(id){
        $.get(`${URL}/${id}`, function (f){
            friend=f;
        });
        $.ajax({
            url:`${URL}/${id}`,
            type:"DELETE",
            success: function(){
                $('#success').text(`Tu amigo, ${friend} fue eliminado con exito`);
                $('#inputDelete').val("");
                showFriends();
            }
        })
    } else {
        
    }
};

$('#delete').click(deleteFriend);


