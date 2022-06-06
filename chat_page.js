//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
  msg=document.getElementById("msg").value ;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("click on like button-" + message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value ;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(romm_name).child(message_id).update({
            like:updated_likes
      });


}

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name",name);
        window.location = "kwitter_page.html";
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

