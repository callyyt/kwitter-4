
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAbZDuucWfQ1Qe3dxD6unHNTXcEnkVVRCM",
      authDomain: "lets-chat-305e9.firebaseapp.com",
      projectId: "lets-chat-305e9",
      storageBucket: "lets-chat-305e9.appspot.com",
      messagingSenderId: "502161116108",
      appId: "1:502161116108:web:1f52726d6e7fd54fca2b69"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    function addRoom()
   {
         room_name = document.getElementById("room_name").ariaValueMax;

         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });

         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        <div>
              <String>"Room_names"</String>
        </div>
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
