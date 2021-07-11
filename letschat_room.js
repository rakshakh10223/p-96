
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPX_H1QlMhsKgwe-kUCbXr5_RefP0hNzE",
    authDomain: "kwitter-f58f9.firebaseapp.com",
    databaseURL: "https://kwitter-f58f9-default-rtdb.firebaseio.com",
    projectId: "kwitter-f58f9",
    storageBucket: "kwitter-f58f9.appspot.com",
    messagingSenderId: "77515196247",
    appId: "1:77515196247:web:e755055cb33f5e09dde012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    Chat
    
    
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "letschat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}